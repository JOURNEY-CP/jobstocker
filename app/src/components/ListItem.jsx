import React from 'react';
import { connect } from 'react-firebase'
import Paper from '@material-ui/core/Paper';
import './list-item.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {updateJobStatus} from '../database/jobs';

class ListItem extends React.Component{
    render(){
        const {name,deadline,link,createdAt,createdBy,photo,id,description}=this.props;
        return (
            <Paper elevation={10} className="list-item-paper">
            <a className="list-item-link" href={link}>
                <div className="list-item-main">
                    <div className="list-item-core">                    
                        <div className="list-item-created">{createdAt}</div>
                        <div className="list-item-name">{name}</div>
                        {deadline!=="NA"&&<div className="list-item-deadline">Deadline : {deadline}</div>}
                        {description&&<div className="list-item-deadline"> {description}</div>}
                    </div>
                </div>
            </a>      
            <div className="list-item-photo-buttons">
            {
                        photo?
                             <Avatar className="list-item-avatar" src={photo} alt={createdBy[0]} />: 
                             <Avatar className="list-item-avatar">{createdBy[0]}</Avatar>
            }   
            <div className="list-item-buttons">    
                <div className="list-item-button">
                <Button  
                    className="list-item-button"  
                    variant="contained" 
                    color="secondary" 
                    onClick={()=>this.props.updateJobStatus(id,"CANCELLED")}
                >
                    Reject
                </Button>
                </div>
                <div className="list-item-button">
                <Button  
                    className="list-item-button"  
                    variant="contained" 
                    color="primary" 
                    onClick={()=>this.props.updateJobStatus(id,"APPLIED")}
                >
                    Applied
                </Button>
                </div>
            </div>
            </div>     
            </Paper>
        );
    }
}

const mapFirebaseToProps = (props, ref) => ({
    updateJobStatus: (jobId,status) => updateJobStatus(ref,localStorage.getItem('uid'),jobId,status)
})

export default connect(mapFirebaseToProps)(ListItem);