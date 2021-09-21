import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

type Size = 'sm' | 'md' | 'lg';
type Theme = 'primary' | 'secondary' | 'gradient';

const sm = css`
  height: 48px;
  width: 180px;
  font-size: 16px;
`;

const md = css`
  height: 80px;
  font-size: 24px;
  padding: 0 60px;
  border-radius: 30px;
`;
const lg = css`
  height: 100px;
  font-size: 24px;
  padding: 0 60px;
  border-radius: 30px;
`;

const primary = css`
  background: linear-gradient(
    275.14deg,
    #7549d4 0%,
    #e2486a 35.94%,
    #ed6858 69.79%,
    #f09051 100%
  );
  color: #fff;
  &:disabled {
    background: #a1aab9;
  }
  transition: border-color 200ms ease 0s, color 200ms ease 0s,
    background-color 200ms ease 0s, background-position-x 400ms ease-in-out 0s;

  &:hover {
    background-position-x: 2%;
  }
`;

const secondary = css`
  background: #fff;
  border: 2px solid #edf0f4;
  color: #7f4acb;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
  transition: border-color 0.15s ease-in-out;
  &:hover {
    border-color: #7f4acb;
  }
`;

const gradient = css`
  background: #ffffff;
  border: 1px solid #edf0f4;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
  border-radius: 50px;
  span {
    background: linear-gradient(90deg, #3cbad9 0%, #4fcfef 100%);
    -webkit-background-clip: text;
  }
`;

const sizes: Record<Size, any> = {
  sm,
  md,
  lg,
};

const themes: Record<Theme, any> = {
  primary,
  secondary,
  gradient,
};

const ButtonBase = styled.button<{ size: Size; btnTheme: Theme }>`
  font-family: Work Sans;
  font-weight: 600;
  font-style: normal;
  border-width: 0px;
  border-style: solid;
  border-radius: 25px;
  ${({ size }) => sizes[size]};
  ${({ btnTheme }) => themes[btnTheme]};
  white-space: nowrap;
  transition: all 0.2s;
  box-shadow: inset 0 1px 0 #fff, 0 2px 0 rgb(0 0 0 / 22%),
    1px 4px 4px 2px rgb(00 0 / 30%);
  outline: 0;
  border-color: #105378;
  background: #3dbbd8;
  color: #ffffff;
  line-height: 28px;
  display: inline-block;
  position: relative;
  zoom: 1;
  border: 1px solid transparent;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
`;

ButtonBase.defaultProps = { type: 'button' };

const Button = ({
  size = 'sm',
  theme = 'primary',
  ...rest
}: {
  size?: Size;
  theme?: Theme;
} & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <ButtonBase size={size} btnTheme={theme} {...rest} />
);

export default Button;
