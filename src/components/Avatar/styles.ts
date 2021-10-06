import styled from 'styled-components';
import { css } from 'styled-components';
import { Size } from './share';

const xxs = css`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

const sm = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const md = css`
  width: 88px;
  height: 88px;
  border-radius: 50%;
`;
const lg = css`
  width: 116px;
  height: 116px;
  border-radius: 50%;
`;
const xl = css`
  width: 196px;
  height: 196px;
  border-radius: 50%;
`;
const CreatorPage = css`
  width: 70px;
  height: 70px;
  border: 5px solid #fff;
  margin-top: -35px;
  border-radius: 50%;
`;
const isNormalPage = css`
  width: 70px;
  height: 70px;
  border: 5px solid #fff;
  margin-top: 0px;
  border-radius: 50%;
`;

const sizes: Record<Size, any> = {
  xxs,
  sm,
  md,
  lg,
  xl,
};
interface Props {
  isCreatorPage: boolean;
  size: Size;
}
export const Avatar = styled.div<Props>`
overflow: hidden;
background: #fff;
margin: 10px;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: inline-block;
}
${({ isCreatorPage }) => (isCreatorPage ? CreatorPage : isNormalPage)};
@media (max-width: 768px) {
  ${({ size }) => (size==="sm" ? sizes.sm : sizes.xl)};
}

`;


