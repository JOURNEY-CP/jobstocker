import React, { Component } from 'react'
import './App.css';
import AddJob from './components/AddJob';
import ListJobs from './components/ListJobs';
import Header from './components/Header';


class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       currentPage:"list"
    }
  }
  setPage=name=>{
    this.setState({currentPage:name});
  }
  getComponent=()=>{
    const {currentPage}=this.state;
    console.log(currentPage);
    if(currentPage==="list"){
      return <ListJobs setPage={this.setPage} />
    }
    else if(currentPage==="add"){
      return <AddJob setPage={this.setPage} />
    }
  }
  render(){
    return (
      <div className="App">
        <Header />
        <this.getComponent />
      </div>
    );
  }
}

export default App;
