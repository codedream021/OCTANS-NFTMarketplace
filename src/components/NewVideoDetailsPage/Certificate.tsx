import React, { useCallback, useRef, useState } from 'react';
import { map } from 'lodash/fp';
import * as S from './styles';
import BSCscan from './assets/bscscan.png';
import IPFS from './assets/eye.svg';
import IPFSMetadata from './assets/cube.svg';
import EncryptionDetails from './EncryptionDetails';
import FilecoinNetwork from './FilecoinNetwork';

interface CertificateItem {
  name: string;
  icon: string;
  popup?: string;
  link?: string;
}

const CertItem = ({
  item: { name, icon, popup, link },
  onClick,
}: {
  item: CertificateItem;
  onClick: (popup: string) => void;
}) => {
  const handleClick = () => onClick(popup || '');
  return (
    <S.CertItem
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      href={link}
    >
      <img width={32} height={32} src={icon} alt={name} />
      <div>{name}</div>
      <img src="/images/explore.svg" width={32} height={32} alt="explore" />
    </S.CertItem>
  );
};

const Certificate = (props: any) => {
  const { data } = props;
  const certificates = useRef<CertificateItem[]>([
    {
      name: 'View on BscScan',
      icon: BSCscan,
      link: `https://rinkeby.etherscan.io/token/${data.assetContract.address}?a=${data.tokenId}`,
    },
    {
      name: 'View on IPFS',
      icon: IPFS,
      link: `https://rinkeby.etherscan.io/token/${data.assetContract.address}?a=${data.tokenId}`,
    },
    {
      name: 'View IPFS Metadata',
      icon: IPFSMetadata,
      link: `https://rinkeby.etherscan.io/token/${data.assetContract.address}?a=${data.tokenId}`,
    }
  ]);
  const [popup, setPopup] = useState<string | null>(null);
  const handleClose = () => {
    setPopup(null);
  };
  const openPopup = (popup: string) => setPopup(popup);
  const renderItem = useCallback(
    (item: CertificateItem) => (
      <CertItem item={item} key={item.name} onClick={openPopup} />
    ),
    []
  );

  return (
    <div>
      {/* <S.SectionTitle>Proof of Ownership</S.SectionTitle> */}
      <div>{map(renderItem, certificates.current)}</div>
      {popup === 'encryption' && (
        <EncryptionDetails onClose={handleClose} drmKey={data.drmKey} />
      )}
      {popup === 'filecoin' && (
        <FilecoinNetwork data={data} onClose={handleClose} />
      )}
    </div>
  );
};

export default Certificate;
