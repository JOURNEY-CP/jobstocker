import React, { Component } from 'react'
import { connect } from 'react-firebase'
import { getAllJobs } from '../database/jobs';

class ListJobs extends Component {
    render() {
        console.log(this.props&&this.props.jobs&&Object.entries(this.props.jobs));
        return (
            <div>
                {
                    this.props&&this.props.jobs&&Object.entries(this.props.jobs).forEach(([id, job]) => (
                        <div id={id}>
                            <p>{id},{job.name}</p>
                            <a href={job.link}>{job.link}</a>
                            <p>DeadLine: {job.deadline}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapFirebaseToProps = (props, ref) => ({
    jobs: getAllJobs('jobs')
})

export default connect(mapFirebaseToProps)(ListJobs);