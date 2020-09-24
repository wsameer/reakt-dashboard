import React, { Suspense } from 'react';
import './App.scss';
import BusyIndicator from './Components/BusyIndicator';
import Footer from './Components/Footer';
import Layout from './Components/Layout';

function App() {
  return (
    <Suspense fallback={<BusyIndicator />}>
      <div className="app container-fluid p-0">
        <div className="round-square">
          <Layout />
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
