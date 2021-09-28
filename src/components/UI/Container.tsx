import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import VanillaTilt from 'vanilla-tilt';
type Props ={
  options: Object,
}
  export const Tilt: React.FC<Props> = (props) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    if(tilt.current!==null){
      VanillaTilt.init((tilt.current as any), options);
    }
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Container = styled.div`
  max-width: 100%;
  padding: 0 24px;
`;

export default Container;
