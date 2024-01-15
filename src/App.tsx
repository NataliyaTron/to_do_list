import React from 'react';
import "./normalize.scss";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GreetingPage from './pages/GreetingPage/GreetingPage';

function App() {
  return (
    <div className="App">
      <GreetingPage />
    </div>
  );
}

export default App;
