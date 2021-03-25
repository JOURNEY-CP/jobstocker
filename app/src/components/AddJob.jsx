import React, { Component } from 'react'
import { connect } from 'react-firebase'
import {addNewJob} from '../database/jobs';

class AddJob extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"microsoft",
            link:"careers.microsoft.com",
            deadline:"NA",
        }
    }
    onAddClick=()=>{
        this.props.addNewJob(this.state)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.onAddClick}>Add</button>
            </div>
        )
    }
}
const mapFirebaseToProps = (props, ref) => ({
    addNewJob: job => addNewJob(ref,job)
})

export default connect(mapFirebaseToProps)(AddJob);