import React from 'react';
import { render } from 'react-dom';
import './app.global.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Player from 'components/player/Player';

document.addEventListener('DOMContentLoaded', () => {
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
