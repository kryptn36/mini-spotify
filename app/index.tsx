import React from 'react';
import { render } from 'react-dom';
import './app.global.scss';
import { createHashHistory } from 'history';

document.addEventListener('DOMContentLoaded', () => {
  const Root = require('./containers/Root').default;
  render(
    <>
      <Root history={createHashHistory()} />
    </>,
    document.getElementById('root')
  );
});
