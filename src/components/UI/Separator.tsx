import React, { ReactNode } from 'react';
import styled from 'styled-components';


 const Sep = styled.div`
  width: 90%;
  border-top: 1px solid #ededed;
  margin: 20px auto;
`;

const Separator = ({ width }: { width: string }) => {
  return <Sep style={{width:`${width}%`}} />;
};

export default Separator;
