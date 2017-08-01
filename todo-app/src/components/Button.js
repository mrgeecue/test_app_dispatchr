import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Button extends React.Component {
  render() {
    return (
      <button style={styles.buttonStyle}>
        {this.props.children}
      </button>
    );
  };
};

const styles = {
  buttonStyle: {
    backgroundColor: '#fff'
  }
};

export default Button;
