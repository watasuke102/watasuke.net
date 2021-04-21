/*!
 * index.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/main.scss';

// Components
import Top from './pages';
import Profile from './pages/profile';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Top} />
    <Route exact path="/profile" component={Profile} />
  </BrowserRouter>,
  document.getElementById('main')
);
