import React, { Component } from 'react'
import { connect } from 'react-firebase'
import {addNewJob} from '../database/jobs';
import FloatingActionButton from './FloatingActionButton';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import "./add-job.css"
class AddJob extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            link:"https://",
            deadline:"NA",
            createdBy:"",
            error:false
        }
    }
    handleChange=(event)=>{
        if(event.target.id==="link"){
            var re = /^https?:\/\/.*$/;
            this.setState({error:!re.test(event.target.value)});
        }
        this.setState({[event.target.id]:event.target.value});
    }
    onAddClick=()=>{
        const {createdBy,name,link,deadline,error}=this.state;
        if(createdBy===""){
            alert("Enter Your Name");
            return;
        }
        if(name===""){
            alert("Enter Proper Name of the company");
            return;
        }
        if(link===""){
            alert("Enter Proper Link of the Internship");
            return;
        }
        if(error){
            alert("Enter Proper Link of the Internship");
            return;
        }
        this.props&&
        this.props.setPage&&
        this.props.setPage("list")
        this.props.addNewJob({createdBy,name,link,deadline})
    }
    render() {
        return (
            <div>
                <center>
                <Paper elevation={24} className="add-job-header">Add New Job</Paper>
                <Paper elevation={15} className="add-job-sub-header">
                    Please submit only valid companies.
                    Cross check once before submission
                </Paper>
                </center>
                <div></div>
                <br/><br/>
                <TextField className="add-job-text-field" id="createdBy" label="Your Name" onChange={this.handleChange}/>
                <br/><br/>
                <TextField className="add-job-text-field" id="name" label="Company Name" onChange={this.handleChange}/>
                <br/><br/>
                <TextField className="add-job-text-field" id="deadline" label="Deadline"  onChange={this.handleChange}/>
                <br/><br/>
                <TextField 
                    type="url"  
                    pattern="https://.*" 
                    className="add-job-text-field" 
                    id="link" label="Link" 
                    value={this.state.link} 
                    onChange={this.handleChange}
                    helperText={this.state.error?"Invalid Format start with https://":"Start with https://"}
                    error={this.state.error}
                    />
                <br/><br/>
                <div className="fab-position">
                    <FloatingActionButton 
                        onClick={this.onAddClick} 
                        icon={"list"}
                    />
                </div>
            </div>
        )
    }
}
const mapFirebaseToProps = (props, ref) => ({
    addNewJob: job => addNewJob(ref,job)
})

export default connect(mapFirebaseToProps)(AddJob);