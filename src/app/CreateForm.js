import React from 'react';
import {BjjNotesCreateForm} from './bjjnotes/BjjNotesCreateForm';
import {GoodReadsCreateForm} from './goodreads/GoodReadsCreateForm';
import {TilCreateForm} from './til/TilCreateForm';

const styles = {
  tableHeader: {
    border: '2px solid red'
  },
  tableBody: {
    border: '2px solid blue'
  }
};

export class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      selected: 'bjjnotes'
    };
  }

  fetchSelectValues() {
    return {bjjnotes: 'Bjj notes', til: 'Today I learnt', goodreads: 'Good reads'};
  }

  getDomForSelectValues() {
    const selectValuesObject = this.fetchSelectValues();
    const rows = [];
    for (const key in selectValuesObject) {
      if ({}.hasOwnProperty.call(selectValuesObject, key)) {
        rows.push(<option value={key} key={key}>{selectValuesObject[key]}</option>);
      }
    }
    return rows;
  }
  handleOnChange(e) {
    this.setState({selected: e.target.value});
    console.log('something changed', e.target.value);
  }
  getBody(params) {
    const template = {
      bjjnotes: <BjjNotesCreateForm/>,
      til: <TilCreateForm/>,
      goodreads: <GoodReadsCreateForm/>
    };
    console.log('here it is ', template[params]);
    return template[params];
  }
  /* on trying to handleOnChange.bind(this) :
  A bind call or arrow function in a JSX prop will create a brand new function on every single render.
  This is bad for performance, as it will result in the garbage collector being invoked
  way more than is necessary.
   */
  render() {
    return (
      <div>
        <div style={styles.tableHeader}>
          <select onChange={this.handleOnChange}>
            {this.getDomForSelectValues()}
          </select>
        </div>
        <div style={styles.tableBody}>
          {this.getBody(this.state.selected)}
        </div>
      </div>
    );
  }
}
