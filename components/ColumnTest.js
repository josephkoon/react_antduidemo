import React from 'react';
import { Row, Col } from 'antd';


export default class ColumnTest extends React.Component {
	render(){
		return(
		
			  <div>
			  	<h1>Column Test</h1>
			    <Row>
			      <Col span={12}>col-12</Col>
			      <Col span={12}>col-12</Col>
			    </Row>
			    <Row>
			      <Col span={8}>col-8</Col>
			      <Col span={8}>col-8</Col>
			      <Col span={8}>col-8</Col>
			    </Row>
			    <Row>
			      <Col span={6}>col-6</Col>
			      <Col span={6}>col-6</Col>
			      <Col span={6}>col-6</Col>
			      <Col span={6}>col-6</Col>
			    </Row>
			  </div>
	  		
		)
	}
}