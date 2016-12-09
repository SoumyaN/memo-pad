import React, {Component} from 'react';

const styles = {
  tech: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0'
  }
};

export class Technique extends Component {
  render() {
    console.log('in technique class');
    return (
      <div style={styles.tech}>
        <h3 style={styles.h3}>
          {"everything"}
        </h3>
        <p>{this.props.technique.starting_position}</p>
        <p>{this.props.technique.noOfHours}</p>
      </div>
    );
  }
}

Technique.propTypes = {
  technique: React.PropTypes.object.isRequired
};
