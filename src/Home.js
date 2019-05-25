import React from 'react';
import {Route, Switch} from "react-router";
import AddOrder from "./AddOrder";
import VIewOrder from "./VIewOrder";
import {Link} from "react-router-dom";

export default class Home extends React.Component {

  render() {
    return <div>
      <h1>Order Management</h1>
      <Switch>
        {/*<Link to={'/add-order'}>Add Order</Link>*/}
        {/*<Route path={'/add-order'} component={Ho}/>*/}
        <Route path={'/add-order'} component={AddOrder}/>
        <Route path={'/view-order'} component={VIewOrder}/>
      </Switch>
    </div>
  }
}
