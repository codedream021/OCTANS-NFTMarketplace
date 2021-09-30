import React from 'react';
import Modal from 'components/UI/Modal';
import * as S from './styles';
import { useStore } from 'store';
import Button from 'components/UI/Button';
import View from 'components/UI/View';
import useConnectWallet from 'hooks/useConnectWallet';

const ConnectWallet = () => {
  const { closeModal } = useStore('modalsStore');
  const onClose = () => closeModal('connectWallet');
  const connectWallet = useConnectWallet();
  return (
    <Modal onClose={onClose}>
      <S.Title>Connect wallet</S.Title>
      <S.Description>
        You need to connect your wallet first to sign messages and send
        transaction to Octans network.
      </S.Description>
      <S.ButtonsWrapper>
      <Button onClick={connectWallet}>Connect</Button>
        <Button onClick={onClose} theme="secondary">
          Cancel
        </Button>
      </S.ButtonsWrapper>
    </Modal>
  );
};

export default ConnectWallet;
