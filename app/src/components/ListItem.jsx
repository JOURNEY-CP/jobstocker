import React from 'react';
import Paper from '@material-ui/core/Paper';
import './list-item.css';

class ListItem extends React.Component{
    render(){
        const {name,deadline,link}=this.props;
        return (
            <Paper elevation={10} className="list-item-paper">
            <a className="list-item-link" href={link}>
                <div className="list-item-name">{name}</div>
                <div className="list-item-deadline">Deadline : {deadline}</div>
            </a>              
            </Paper>
        );
    }
}

export default ListItem;