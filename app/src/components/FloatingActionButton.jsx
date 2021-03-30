import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab 
        color="primary" 
        aria-label={(props&&props.icon)||"add"} 
        onClick={()=>{props&&props.onClick&&props.onClick()}}
        variant="extended"
      >
      {
        (props&&props.icon)==="list"?<SaveIcon />:<AddIcon/>
      }
      &nbsp; {(props&&props.icon)==="list"?"Save Job":"Add Job"}
      </Fab>
    </div>
  );
}
