import React, { Suspense, useState } from 'react';
import './App.scss';
import BusyIndicator from './Components/BusyIndicator';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Layout from './Components/Layout';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Suspense fallback={<BusyIndicator />}>
      <div className="app container-fluid p-0">
        {/* <Header darkMode={darkMode} /> */}
        <div className="round-square">
          <Layout />
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
