import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Computer from '@material-ui/icons/Computer';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import Sports from '@material-ui/icons/Sports';
import SportsBasketball from '@material-ui/icons/SportsBasketball';
import SportsGolf from '@material-ui/icons/SportsGolf';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '30%',
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

export default function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Container maxWidth={"xl"}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        购物小帮手
                    </ListSubheader>
                }
                className={classes.root}
                style={{marginBottom:40, display:"block"}}
            >
                <ListItem button>
                    <ListItemIcon>
                        <Computer />
                    </ListItemIcon>
                    <ListItemText primary="电脑" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PhoneAndroid />
                    </ListItemIcon>
                    <ListItemText primary="手机" />
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <Sports />
                    </ListItemIcon>
                    <ListItemText primary="运动" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <SportsBasketball />
                            </ListItemIcon>
                            <ListItemText primary="篮球用品" />
                        </ListItem>
                    </List>
                </Collapse>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <SportsGolf />
                            </ListItemIcon>
                            <ListItemText primary="高尔夫球用品" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Container>
    );
}
