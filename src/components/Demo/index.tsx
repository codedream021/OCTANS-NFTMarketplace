import React, { ChangeEvent, FormEvent, useState } from 'react';
import * as S from './styles';
import Octans from './assets/octans.png';
import filecoin from './assets/filecoin.svg';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const Demo = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setToken(e.target.value);
  const handleExplore = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/videos/${token}`);
  };
  return (
    <S.Container>
      <S.Title>Octans NFT Demo</S.Title>
      <S.PoweredBy>
        <S.PoweredByTitle>Powered by</S.PoweredByTitle>
        <S.Logos>
          <div>
            <a
              href="https://Octans.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Octans} alt="Octans" />
            </a>
          </div>
          <div>
            <a
              href="https://filecoin.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={filecoin} height={38} alt="Filecoin" />
            </a>
          </div>
        </S.Logos>
        <S.Form onSubmit={handleExplore}>
          <input
            placeholder="Token ID"
            onChange={handleChange}
            value={token}
            type="text"
          />
          <Button type="submit">Explore NFT</Button>
        </S.Form>
      </S.PoweredBy>
    </S.Container>
  );
};

export default Demo;
