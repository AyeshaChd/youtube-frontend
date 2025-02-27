// import { useState } from 'react'
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";

import "./App.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
