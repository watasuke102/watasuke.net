/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import Container from '../components/PortfolioContainer';

export default () => {
  return (
    <Container>
      <>
        <h2>Page 0</h2>
        <li>0</li><li>1</li><li>2</li>
        <li>3</li><li>4</li><li>5</li>
      </>
      <>
        <h2>Page 1</h2>
        <li>A</li><li>B</li><li>C</li>
        <li>D</li><li>E</li><li>F</li>
      </>
      <>
        <h2>Page 2</h2>
        <li>3</li><li>4</li><li>5</li>
        <li>0</li><li>1</li><li>2</li>
      </>
    (
      <div>
        <p>text</p>
      </div>

      <>
        <h2>Page 3</h2>
        <li>D</li><li>E</li><li>F</li>
        <li>A</li><li>B</li><li>C</li>
      </>
    </Container>
  );
}

