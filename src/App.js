import React from 'react';
import './App.css';
import InputForm from './Components/InputForm';
import ServiseList from './Components/ServiseList';
import store from './Store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <InputForm />
        <ServiseList />
      </div>
    </Provider>
  );
}

export default App;
