import React from 'react';
import ReactDOM from 'react-dom';
import { Button, LocaleProvider, DatePicker, message } from 'antd';
// The default locale is en-US, but we can change it to other language
import frFR from 'antd/lib/locale-provider/fr_FR';
import moment from 'moment';
import 'moment/locale/fr';

import ButtonTest from './components/ButtonTest.js'
import ColumnTest from './components/ColumnTest.js'
import LayoutTest from './components/LayoutTest.js'
import BreadcrumbTest from './components/BreadcrumbTest.js'
import DropdownTest from './components/DropdownTest.js'
import MenuTest from './components/MenuTest.js'
import PaginationTest from './components/PaginationTest.js'
import StepTest from './components/StepTest.js'

moment.locale('fr');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <LocaleProvider locale={frFR}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          	<div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
       

		    <ButtonTest />
        <ColumnTest />
        <h1>Layout Test</h1>
        <LayoutTest />
        <h1>Breadcrumb Test</h1>
        <BreadcrumbTest />
        <h1>Dropdown Test</h1>
        <DropdownTest />
        <h1>Menu Test</h1>
        <MenuTest />
        <h1>Pagination Test</h1>
        <PaginationTest />
        <h1>Step Test</h1>
        <StepTest />

	    </div>
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));