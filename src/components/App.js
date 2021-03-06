import React from 'react';
import SimpleAppBar from './SimpleAppBar';

import '../App.css';
import VenuesListContainer from '../containers/VenuesListContainer';
import VenuesItemContainer from '../containers/VenuesItemContainer';

const App = ({ location }) => (
  <div style={{ paddingTop: '48px' }}>
    <SimpleAppBar />
    <VenuesListContainer />
    <VenuesItemContainer />
  </div>
);
export default App;
