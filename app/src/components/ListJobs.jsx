import React, { Component } from 'react'
import { connect } from 'react-firebase'
import { getAllJobs } from '../database/jobs';
import FloatingActionButton from './FloatingActionButton';
import ListItem from './ListItem';
import './list-item.css'
class ListJobs extends Component {
    render() {
        return (
            <div>
                <div className="list-jobs-all">
                {
                    this.props&&this.props.jobs&&Object.entries(this.props.jobs).map(([id, job]) => (
                        <ListItem 
                            key={id} 
                            name={job.name} 
                            deadline={job.deadline} 
                            link={job.link}
                        />
                    ))
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
    jobs: getAllJobs('jobs')
})

export default connect(mapFirebaseToProps)(ListJobs);