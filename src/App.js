import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import Events from './events';
import { Footer, Header, Hero } from './layout';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <Events />
      </main>
      <Footer />
    </>
  );
}

export default App;
