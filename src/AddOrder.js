import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import axios from 'axios';
const { Option } = Select;
class AddOrder extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      alert(JSON.stringify(values))
      axios.post('http://localhost:8080/order/add-order', {
        ...values
      })
        .then((data) => {
          console.log('order data: ', data);
        }).catch((ex) => console.log('Except: ', ex))
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    // const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Product Id">
          {getFieldDecorator('productId', {
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Quantity">
          {getFieldDecorator('qty', {
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Order Date">
          {getFieldDecorator('orderDate', {
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Total Bill">
          {getFieldDecorator('totalBill', {
          })(<Input />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add Order
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create()(AddOrder);
