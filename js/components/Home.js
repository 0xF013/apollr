import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as RoutineActions from '../actions/RoutineActions';
import styles from '../../css/app.css';


@connect(state => ({ routines: state.routines }))
export default class Home extends Component {
  render() {
    const {routines, dispatch} = this.props;
    const actions = bindActionCreators(RoutineActions, dispatch);
    return (
      <main>
        <h1 className={styles.text}>Routines</h1>
      </main>
    );
  }
}
