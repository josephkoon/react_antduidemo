import React from 'react';
import { Pagination } from 'antd';


export default class ColumnTest extends React.Component {
	render(){
		return(
		
			<Pagination defaultCurrent={6} total={500} />
	  		
		)
	}
}