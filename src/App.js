import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingLeft: "10%",
    width: '80%',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">ToastUI Editor Example</Typography>
      <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          initialValue="hello"
          usageStatistics={false}
        />
    </div>
  );
};

export default App;
