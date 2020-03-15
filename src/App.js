import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {AsyncLoading} from "./redux/actions/index"
function App(props) {
  console.log("props", props)

  return (
    <div className="App">
        Learn React {props.loading.toString()}
        <button onClick={props.AsyncLoading} >
          Change
        </button>
    </div>

  );
}
const stateToProps = state =>{
  console.log("statte", state)
  return{
    loading: state.loading
  } 
}
const mapDispatchToProps = {
  AsyncLoading
}
export default connect(stateToProps, mapDispatchToProps)(App);
