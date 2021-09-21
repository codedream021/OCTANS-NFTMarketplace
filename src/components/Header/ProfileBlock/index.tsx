import React, { useCallback, useEffect } from 'react';
import * as S from './styles';
import { formatEther } from '@ethersproject/units';
import Avatar from 'components/Avatar';
import View from 'components/UI/View';
import cutString from 'helpers/cutString';
import { useWeb3React } from '@web3-react/core';
import contract from 'lib/contract';
import { useInterval, useToggle } from 'react-use';
import { toFixedNoRound } from 'lib/utils';
import Button from 'components/UI/Button';
import authApi from 'api/auth';
import { setTokenHeader } from 'api';
import jwtDecode from 'jwt-decode';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';
import useConnectWallet from 'hooks/useConnectWallet';
import ProfilePopup from 'components/Header/ProfileBlock/ProfilePopup';
import { useProfile } from 'api/account';
import { Account } from 'types/account';
import Spinner from 'components/UI/Spinner';
import { Network, OpenSeaPort } from 'opensea-js';
import OctansLogoSale from 'components/OctansLogoSale';

const REACT_APP_TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS as string;
const BALANCE_FETCH_INTERVAL = 3000;

const ProfileBlock = () => {
  const {
    ethBalance,
    token,
    setVidBalance,
    setEthBalance,
    setAccount,
    setToken,
    isMetamaskInstalled,
    setOpenSea,
  } = useStore('metamaskStore');
  const [isOpen, toggle] = useToggle(false);
  const {
    data: profile,
    isFetching,
    isFetchedAfterMount,
    refetch,
  } = useProfile();
  const connectWallet = useConnectWallet();
  const { account, library, chainId } = useWeb3React();
  const cutAddress = cutString(account, 5, 4);
  const getTokenBalance = useCallback(async () => {
    try {
      const newBalance = await token.balanceOf(account);
      setVidBalance(newBalance);
    } catch (e) {
      setVidBalance(0);
    }
  }, [account, setVidBalance, token]);
  const getEthBalance = useCallback(async () => {
    try {
      const newBalance = await library.getBalance(account);
      setEthBalance(newBalance);
    } catch (e) {
      setEthBalance(0);
    }
  }, [account, library, setEthBalance]);
  const getBalance = useCallback(async () => {
    if (!account || !library || !token || !chainId) return;
    getTokenBalance();
    getEthBalance();
  }, [account, chainId, getEthBalance, getTokenBalance, library, token]);

  const auth = async () => {
    if (!account) return;
    const authToken = localStorage.getItem('token');
    const storedAccount = localStorage.getItem('account');
    if (authToken && storedAccount === account) {
      const decoded = jwtDecode(authToken) as any;
      const isExp = decoded.exp * 1000 <= Date.now();
      if (!isExp) {
        updateOpenSea();
        return;
      }
    }
    let res;
    try {
      res = await authApi.getNonce(account);
    } catch {
      res = await authApi.signup(account);
    }
    const signature = await library.getSigner(account).signMessage(res.nonce);
    const { token } = await authApi.auth(account, signature);
    localStorage.setItem('token', token);
    localStorage.setItem('account', account);
    console.log({ token });
    setTokenHeader(token);
    updateOpenSea();
    refetch();
  };

  const updateOpenSea = () => {
    const token = localStorage.getItem('token') || '';
    const openSeaPort = new OpenSeaPort(library.provider, {
      networkName: Network.Custom,
      authToken: token,
    } as any);
    setOpenSea(openSeaPort);
  };

  useEffect(() => {
    if (!account || !library || !chainId) return;
    const abi = require('contract/token.json').abi;
    const vid = contract(REACT_APP_TOKEN_ADDRESS, abi, library);
    setToken(vid);
    setAccount(account);
    auth();
  }, [account, chainId, library, setAccount, setToken]);
  useEffect(() => {
    getBalance();
  }, [getBalance]);

  useInterval(getBalance, BALANCE_FETCH_INTERVAL);
  const formattedEthBalance = toFixedNoRound(formatEther(ethBalance), 2);

  const renderMetaMaskData = () => {
    if (account && profile) {
      const data: {
        balance: string;
        address: string;
      } & Account = {
        balance: formattedEthBalance,
        ...profile,
      };
      return (
        <S.ProfileBlock>
          <View row onClick={toggle}>
            <Avatar name={profile?.address} src={profile?.profileImgUrl} />
            <View marginL={10} marginR={50}>
              <S.Balance>
                {formattedEthBalance}
                <OctansLogoSale></OctansLogoSale>
              </S.Balance>
              <div>{cutAddress}</div>
            </View>
          </View>
          <S.UploadBtn to="/upload">+</S.UploadBtn>
          <ProfilePopup isOpen={isOpen} onClose={toggle} data={data} />
        </S.ProfileBlock>
      );
    }
    return (
      <S.ConnectBtnDiv>
        {isFetching && !isFetchedAfterMount ? (
          <Spinner size="sm" />
        ) : !isMetamaskInstalled ? (
          <div>Not installed</div>
        ) : (
          <Button
            size={'sm'}
            theme={'gradient'}
            onClick={connectWallet}
            style={{ textTransform: 'uppercase' }}
          >
            Connect Wallet
          </Button>
        )}
      </S.ConnectBtnDiv>
    );
  };
  return renderMetaMaskData();
};

export default observer(ProfileBlock);
