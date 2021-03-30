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
            link:"",
            deadline:"NA",
        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.id]:event.target.value});
    }
    onAddClick=()=>{
        if(this.state.name===""){
            alert("Enter Proper Name of the company");
            return;
        }
        if(this.state.link===""){
            alert("Enter Proper Link of the Internship");
            return;
        }
        this.props&&
        this.props.setPage&&
        this.props.setPage("list")
        this.props.addNewJob(this.state)
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
                <TextField className="add-job-text-field" id="name" label="Name" onChange={this.handleChange}/>
                <br/><br/>
                <TextField className="add-job-text-field" id="deadline" label="Deadline" />
                <br/><br/>
                <TextField className="add-job-text-field" id="link" label="Link" />
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