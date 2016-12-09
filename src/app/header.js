import React, {Component} from 'react';
import Time from 'react-time';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  render() {
    console.log('inside header');
    const now = new Date();
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">
            Your diaries...
          </a>
        </p>
        <p style={styles.date}>
          Today is <Time value={now} format="YYYY/MM/DD HH:mm"/>
        </p>
      </header>
    );
  }
}
