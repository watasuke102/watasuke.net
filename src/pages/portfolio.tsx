/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/portfolio.scss';
import {Seo} from '@/common';
import React from 'react';
import {PortfolioContainer, Entrypoint, Welcome, Skills, Works, Links, End} from '@/feature/portfolio';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([{name: 'Portfolio'}]);

export default function Portfolio(): React.ReactElement {
  return <Entrypoint />;
  return (
    <div id='portfolio-container'>
      <PortfolioContainer>
        <Welcome />
        <Skills />
        <Works />
        <Links />
        <End />
      </PortfolioContainer>
    </div>
  );
}

export const Head = (): React.ReactElement => (
  <Seo title={'ポートフォリオ'} desc={'ポートフォリオです'} url={'/portfolio'} breadcrumb_list={breadcrumb_list} />
);
