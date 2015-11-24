import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class Routine extends Component {
  render() {
    return (
      <div>
       { this.props.routine }
      </div>
    );
  }
}