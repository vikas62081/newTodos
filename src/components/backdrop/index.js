import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { EventEmitter } from 'fbemitter'

export const emitter = new EventEmitter();
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
const Loading = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const reset = () => {
    setOpen(false)
  }
  const autoHideAfterTimeout = () => {
    setTimeout(() => reset(), 1500)
  }
  emitter.addListener("PROCESSING", () => {
    setOpen(true)
    autoHideAfterTimeout()
  })
  if (!open) {
    return null
  }
  return <Backdrop className={classes.backdrop} open={open}>
    <CircularProgress color="secondary" />
  </Backdrop>
}

export default Loading