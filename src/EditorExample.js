import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    paddingLeft: "10%",
    width: '80%',
  },
  table: {
    maxWidth: 300,
  },
  tableHeader: {
    fontWeight: "bold"
  },
  divider: {
    paddingTop: "5px",
    paddingBottom: "5px"
  }
});

const EditorExample = ({citations}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">ToastUI Editor Example</Typography>

      <Divider className={classes.divider} />

      <Typography variant="h5">Citations Given</Typography>

      <TableContainer className={classes.table} component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell>Author</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {citations.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider className={classes.divider} />

      <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          initialValue=""
          usageStatistics={false}
        />
    </div>
  );
};

export default EditorExample;
