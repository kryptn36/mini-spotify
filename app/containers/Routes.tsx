import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Player from 'components/player/Player';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" component={Player} />
      </Switch>
    </>
  );
}
