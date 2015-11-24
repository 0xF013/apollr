import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as RoutineActions from '../actions/RoutineActions';
import styles from '../../css/app.css';
import Routine from './Routine';


@connect(state => ({ routines: state.routines }))
export default class Home extends Component {

  state = {}

  render() {
    const { routines } = this.props;
    return (
      <main>
        <h1 className={styles.text}>Routines</h1>
        { this.renderRoutines(routines) }
        { this.renderRoutineForm() }
      </main>
    );
  }

  renderRoutines(routines) {
    if (routines.length) {
      return routines.map((routine, index) => <Routine key={index} routine={routine} />)
    } else {
      return <div>no routines</div>
    }
  }

  renderRoutineForm() {
    return (
      <form onSubmit={ ::this.createRoutine }>
        <label htmlFor="routineName">Name:</label>
        <input type="text" name="routineName" ref="nameInput" />
        <input type="submit" value="Create" />
      </form>
    );
  }

  createRoutine(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const actions = bindActionCreators(RoutineActions, dispatch);
    console.log(this.refs.nameInput.value);
    actions.addRoutine(this.refs.nameInput.value);
  }
}




