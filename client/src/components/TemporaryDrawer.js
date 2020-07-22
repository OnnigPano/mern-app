import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Avatar, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  avatar: {
    width: 70,
    height: 70,
    marginRight: 10
  }
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawer}
    > 
      <List>
        <ListItem>
          <Avatar src="/1595034870102.jpg" className={classes.avatar} />
          <Typography variant="subtitle1" component="h4">
            El
            Kimbalache
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  return (
          <Drawer anchor='left' open={props.drawerState} onClose={props.toggleDrawer}>
            {list}
          </Drawer>
      )
}
