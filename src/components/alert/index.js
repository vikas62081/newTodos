import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { EventEmitter } from 'fbemitter'
import Slide from '@material-ui/core/Slide';
export const alertEmitter = new EventEmitter();

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
const Notification = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')

    alertEmitter.addListener("NOTIFICATION", (msg) => {
        setTimeout(() => setOpen(true), 500)
        setMsg(msg)
    })
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
            {msg}
        </Alert>
    </Snackbar>
}

export default Notification;