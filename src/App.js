import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Footer from './component/footer';
import './style/index.css'
import AppRouter from './router'
import 'react-sortable-tree/style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
