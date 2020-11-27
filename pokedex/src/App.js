import React from 'react';
import GlobalState from './global/GlobalState'
import Router from './router/router';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <GlobalState>
      <Typography>
      <Router />
      </Typography>
    </GlobalState>
  );
}

export default App;
