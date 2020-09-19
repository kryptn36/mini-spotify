import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.global.scss';

document.addEventListener('DOMContentLoaded', () => {
  const Player = require('./components/player/Player').default;
  render(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Player} />
        </Switch>
      </BrowserRouter>
    </>,
    document.getElementById('root')
  );
});
