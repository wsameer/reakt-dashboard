import React, { Suspense } from 'react';
import './App.scss';
import BusyIndicator from './Components/BusyIndicator';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Layout from './Components/Layout';

function App() {
  return (
    <Suspense fallback={<BusyIndicator />}>
      <div className="app container-fluid">
        <Header />
        <div className="round-square">
          <Layout />
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
