import React from 'react';
import {Table} from "antd";
import axios from 'axios';

export default class VIewOrder extends React.Component {
state = {
  data: undefined,
}
  fetchData = async () => {
    axios.get('http://localhost:8080/order/get-orders')
      .then((data) => {
        this.setState({data:data.data})
      })
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return <div>
      <h1>All orders are here..</h1>
      <Table dataSource={this.state.data !== undefined ? this.state.data : ''} columns={columns} />;
    </div>
  }
}
const columns = [
  {
    title: 'orderId',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Product Id',
    dataIndex: 'productId',
    key: 'productId',
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  }, {
    title: 'Total Bill',
    dataIndex: 'totalBill',
    key: 'totalBill',
  },
];
