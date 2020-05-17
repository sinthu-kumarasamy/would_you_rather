import React,{Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <div className="App">
        <ul>
        {this.props.userIds.map((id) => {
              return(
                <li key={id}>
                    {id}
              </li>
              )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({users}){
  return {userIds: Object.keys(users)};

}

export default connect(mapStateToProps)(App);
