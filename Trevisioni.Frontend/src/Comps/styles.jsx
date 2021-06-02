import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
      eventButton: {
            minHeight: '300px',
            minWidth: '400px',
            maxHeight: '300px',
            maxWidth: '400px',
      },
      day: {
            minHeight: '300px',
            minWidth: '400px',
            maxWidth: '2000px',
            margin: '2px'
      },
      logPaper: {
            padding: 20,
            height: '70vh',
            width: 300,
            margin: '20px auto'
      }
}));

export default useStyles;