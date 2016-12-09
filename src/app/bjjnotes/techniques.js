import React, {Component} from 'react';
import axios from 'axios';
import {Technique} from './technique';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export default class Techniques extends Component {
  constructor() {
    super();
    this.state = {techs: []};
  }

  componentDidMount() {
    console.log('in did mounts');
    axios
      .get('app/bjjnotes/techniques.json')
      .then(response => {
        this.setState({techs: response.data});
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          here is what you wanted
        </h2>
        <div style={styles.techs}>
          {this.state.techs.map((tech, i) => (
            <Technique key={i} technique={tech}/>
          ))}
        </div>
      </div>
    );
  }
}
