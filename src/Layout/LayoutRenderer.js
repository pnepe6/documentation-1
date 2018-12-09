import React from 'react';
import LayoutRendererOriginal from '@rollup-umd/documentation/lib/Layout';
import { homepage } from '../../package.json';
import logo from '../static/bs-logo.png';
import theme from '../theme';

export default (props) => (
  <LayoutRendererOriginal
    theme={theme}
    logoMenu={{
      logo,
      href: homepage,
      alt: 'Bootstrap Styled Logo',
      width: '50%',
      className: 'pb-2',
    }}
    {...props}
  />
);
