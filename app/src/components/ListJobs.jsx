import React, { Component } from 'react'
import { connect } from 'react-firebase'
import { getAllJobs,getStatus } from '../database/jobs';
import FloatingActionButton from './FloatingActionButton';
import ListItem from './ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './list-item.css'
class ListJobs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             type:"FTE",
             status:"NEW"
        }
    }
    
    getDateText=(dt)=>{
        const today=new Date();
        const currDate=new Date(dt);
        var duration=Math.floor((today-currDate)/1000);
        if(duration<=60)return "now";
        if(duration<=3600){
            duration=Math.ceil(duration/3600);
            return duration+" Min ago";
        }
        if(duration<=7200)return "1 Hour ago"
        if(duration<=3600*24){
            duration=Math.ceil(duration/3600);
            return duration+" Hours ago";
        }
        if(duration<=3600*24*7){
            duration=Math.ceil(duration/(3600*24));
            return duration+" Days ago";
        }
        // return currDate.toDateString();0
        return currDate.getDate()+"/"+(currDate.getMonth()+1)+"/"+currDate.getFullYear();
    }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    filters=()=>(
        <div className="list-jobs-filter">
            <Select
            variant="outlined"
            className="list-jobs-filter-select"
            labelId="type"
            id="type"
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
            >
            <MenuItem value="ALL">All</MenuItem>
            <MenuItem value="FTE">FullTime</MenuItem>
            <MenuItem value="INTERN">Intern</MenuItem>
            <MenuItem value="OLD">Old</MenuItem>
            </Select>

            <Select
            variant="outlined"
            className="list-jobs-filter-select"
            width="40%"
            labelId="status"
            id="status"
            name="status"
            value={this.state.status}
            onChange={this.handleChange}
            >
            <MenuItem value="ALL">All</MenuItem>
            <MenuItem value="NEW">New</MenuItem>
            <MenuItem value="APPLIED">Applied</MenuItem>
            <MenuItem value="CANCELLED">Cancelled</MenuItem>
            </Select>
        </div>
    )
    filterType=([id, job])=>{
        if(this.state.type==="ALL"){
            return true;
        }
        if(this.state.type==="FTE"){
            if(job.type==="FTE"){
                return true;
            }
        }
        if(this.state.type==="INTERN"){
            if(job.type==="INTERN"){
                return true;
            }
        }
        if(this.state.type==="OLD"){
            if(job.type!=="FTE" && job.type!=="INTERN"){
                return true;
            }
        }
        return false;
    }
    filterStatus=([id, job])=>{
        const {status}=this.props;
        if(!status)return true;
        if(this.state.status==="ALL"){
            return true;
        }
        if(this.state.status==="NEW"){
            if(status[id]===undefined){
                return true;
            }
        }
        return this.state.status===status[id];
    }
    render() {
        return (
            <div>
                <this.filters/>
                <div className="list-jobs-all">
                {
                    this.props&&this.props.jobs&&
                    Object.entries(this.props.jobs)
                        .filter(this.filterType)
                        .filter(this.filterStatus)
                        .reverse().map(([id, job]) => (
                        <ListItem 
                            key={id} 
                            id={id}
                            name={job.name} 
                            deadline={job.deadline} 
                            link={job.link}
                            createdAt={(job.createdAt && this.getDateText(job.createdAt))||"NOT SPECIFIED"}
                            createdBy={job.createdBy||"Journey"}
                            photo={job.photo}
                            description={job.description}
                        />
                    ))
                }
                {
                    (this.props&&this.props.jobs&&
                    Object.entries(this.props.jobs)
                        .filter(this.filterType)
                        .filter(this.filterStatus).length===0)&&<h1>No  jobs found with the specified filters.Change Filters or Just Relax.</h1>
                }
                </div>
                <div className="fab-position">
                    <FloatingActionButton 
                        onClick={()=>{
                            this.props&&
                            this.props.setPage&&
                            this.props.setPage("add")
                        }} 
                        icon={"add"}
                    />
                </div>
            </div>
        )
    }
}
const mapFirebaseToProps = (props, ref) => ({
    jobs: getAllJobs('jobs'),
    status: getStatus(localStorage.getItem('uid'))
})

export default connect(mapFirebaseToProps)(ListJobs);