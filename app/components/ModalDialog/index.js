import React from 'react';
import './ModalDialog.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';

import './ModalDialog.scss';

export default function ModalDialog(props) {
  const { children, title, open, onClose, flag } = props
  return (
    <Dialog className='modal-dialog' open={open} onClose={onClose} fullScreen={false} maxWidth='md' scroll='paper' PaperComponent={Paper}>
      <DialogTitle>
        <img src={flag}></img>
        { title }
      </DialogTitle>
      <DialogContent>
        { children }
      </DialogContent>
    </Dialog>
  )
}