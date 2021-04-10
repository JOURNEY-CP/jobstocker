import React from 'react';
import Paper from '@material-ui/core/Paper';
import './list-item.css';
import Avatar from '@material-ui/core/Avatar';

class ListItem extends React.Component{
    render(){
        const {name,deadline,link,createdAt,createdBy}=this.props;
        return (
            <Paper elevation={10} className="list-item-paper">
            <a className="list-item-link" href={link}>
                <div className="list-item-main">
                    <Avatar className="list-item-avatar">{createdBy[0]}</Avatar>
                    <div className="list-item-core">
                        <div className="list-item-name">{name}</div>
                        <div className="list-item-deadline">Deadline : {deadline}</div>
                        <div className="list-item-deadline">Added: {createdAt}</div>
                    </div>
                </div>
            </a>              
            </Paper>
        );
    }
}

export default ListItem;