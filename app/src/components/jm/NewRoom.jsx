import React, { Component } from 'react'
import { connect } from 'react-firebase'
import {addNewJob} from '../database/jobs';
import FloatingActionButton from './FloatingActionButton';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "./add-job.css";

class NewRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            link:"https://",
            deadline:"NA",
            // createdBy:"",
            error:false,
            type:"FTE",
            description:"No Special instructions/Comments"
        }
    }
    handleChange=(event)=>{
        if(event.target.id==="link"){
            var re = /^https?:\/\/.*$/;
            this.setState({error:!re.test(event.target.value)});
        }
        if(event.target.name==="type"){
            this.setState({type:event.target.value});
        }
        else{
            this.setState({[event.target.id]:event.target.value});
        }
    }
    onAddClick=()=>{
        const { name,link,deadline,error,type,description}=this.state;
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
        this.props.addNewJob({
            createdBy:this.props.user?this.props.user.name:"ADMIN",
            name,link,deadline,description,
            photo:this.props.user?this.props.user.photo:null,
            email:this.props.user?this.props.user.email:"journeynitdgp@gmail.com",
            views:0,
            applied:0,
            rejected:0,
            pending:0,
            type
        })
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
                {/* <TextField className="add-job-text-field" id="createdBy" label="Your Name" onChange={this.handleChange}/>
                <br/><br/> */}
                <TextField className="add-job-text-field" id="name" label="Company Name" onChange={this.handleChange}/>
                <br/><br/>
                <TextField className="add-job-text-field" id="deadline" label="Deadline"  onChange={this.handleChange}/>
                <br/><br/>
                <TextField className="add-job-text-field" id="description" label="Description"  onChange={this.handleChange}/>
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
                <FormControl component="fieldset">
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup aria-label="type" name="type" id="type" value={this.state.type} onChange={this.handleChange}>
                    <FormControlLabel value="FTE" id="type" control={<Radio />} label="Full Time" />
                    <FormControlLabel value="INTERN" id="type" control={<Radio />} label="Intern" />
                </RadioGroup>
                </FormControl>
                <br/>
                <br/>  <br/>
                <br/>  <br/>
                <br/>  <br/>
                <br/>
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

export default connect(mapFirebaseToProps)(NewRoom);