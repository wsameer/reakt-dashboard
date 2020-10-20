import React, { Suspense } from 'react';
import './App.scss';
import BusyIndicator from '../BusyIndicator';
import Layout from '../Layout/Layout';
import Footer from '../Footer';

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
