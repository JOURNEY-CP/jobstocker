import React, { Component } from 'react'
import './App.css';
import AddJob from './components/AddJob';
import ListJobs from './components/ListJobs';
import Header from './components/Header';
import Auth from './components/Auth';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
       currentPage:"list",
    //    user:this.props.firebaseApp.auth().currentUser?{
    //     name:this.props.firebaseApp.auth().currentUser.displayName,
    //     email:this.props.firebaseApp.auth().currentUser.email,
    //     photo:this.props.firebaseApp.auth().currentUser.photoURL
    //    }:null,
       user:localStorage.getItem('loggedin')==="true"?{
        name:localStorage.getItem('name'),
        email:localStorage.getItem('email'),
        photo:localStorage.getItem('photo')
       }:null,
    //    isSignedIn:this.props.firebaseApp.auth().currentUser?true:false
            isSignedIn:localStorage.getItem('loggedin')==="true"?true:false
    }
}
signInSuccess=User=>{
    console.log(User);
    const user={
        name:User.user.displayName,
        email:User.user.email,
        photo:User.user.photoURL
    }
    localStorage.setItem('name',user.name);
    localStorage.setItem('email',user.email);
    localStorage.setItem('photo',user.photo);
    localStorage.setItem('loggedin',true);
    this.setState({user,isSignedIn:true});
}
setPage=name=>{
    this.setState({currentPage:name});
}
getComponent=()=>{
    const {currentPage,isSignedIn,user}=this.state;
    if(!isSignedIn){ 
        console.log("hi");
        return <Auth firebaseApp={this.props.firebaseApp} signInSuccess={this.signInSuccess}/>;
    }
    if(currentPage==="list"){
        return <ListJobs setPage={this.setPage} />
    }
    else if(currentPage==="add"){
    return <AddJob user={user} setPage={this.setPage} />
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
