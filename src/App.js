import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';
import {Button} from "antd";
import AddOrder from "./AddOrder";
import VIewOrder from "./VIewOrder";
import Home from './Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
<Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
