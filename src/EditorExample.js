import React, { useState, useEffect } from 'react';
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

import tuiCitationPlugin from './tuiCitation';

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
  const editorRef = React.createRef();
  useEffect(() => {
    const editor = editorRef.current?.getInstance();
    const eventManager = editor.eventManager;
    eventManager.addEventType('insertCitation');
    eventManager.listen('insertCitation', function () {
        console.log("insert citation called");
      });
  });
  return (
    <div className={classes.root}>
      <Typography variant="h1">ToastUI Editor Example</Typography>
      <Typography variant="body2">v1.1.0</Typography>
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
              <TableRow key={row.author}>
                <TableCell component="th" scope="row">
                  {row.author}
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
          initialEditType="markdown"
          initialValue=""
          plugins={[tuiCitationPlugin]}
          ref={editorRef}
          toolbarItems={[
            'heading',
            'bold',
            'italic',
            'strike',
            'divider',
            'hr',
            'quote',
            'divider',
            'ul',
            'ol',
            'task',
            'divider',
            'table',
            'image',
            'link',
            'divider',
            'code',
            'codeblock',
            {
                type: 'button',
                options: {
                    event: 'insertCitation',
                    tooltip: 'Insert Citation',
                    text: 'CITE'
                }
            }
        ]}
          usageStatistics={false}
        />
    </div>
  );
};

export default EditorExample;
