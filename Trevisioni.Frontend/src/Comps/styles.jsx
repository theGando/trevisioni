import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
      page: {
            marginTop: '150px',
            marginBottom: '250px'
      },
      eventButton: {
            minHeight: '300px',
            minWidth: '300px',
            maxHeight: '300px',
            maxWidth: '300px',
      },
      day: {
            minHeight: '300px',
            minWidth: '350px',
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