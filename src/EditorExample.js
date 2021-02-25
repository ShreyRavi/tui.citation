import React, { useState, useEffect } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import CiteModal from './CiteModal';
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
  const [insertedCitations, setInsertedCitations] = useState([]);
  const [showCiteModal, setShowCiteModal] = useState(false);
  const classes = useStyles();
  const editorRef = React.createRef();
  useEffect(() => {
    const editor = editorRef.current?.getInstance();
    const eventManager = editor.eventManager;
    try {
      eventManager.addEventType('insertCitation');
      eventManager.addEventType('insertBibliography');
    } catch (error) {
      // already loaded event
    }
  }, []);
  useEffect(() => {
    const editor = editorRef.current?.getInstance();
    const eventManager = editor.eventManager;
    eventManager.listen('insertCitation', function () {
        setShowCiteModal(true);
    });
    eventManager.listen('insertBibliography', function () {
      const insertBibliography = () => {
        editor.moveCursorToEnd();
        editor.insertText(`\n\`\`\`bibliography\n${insertedCitations.toString()}\`\`\``);
        editor.moveCursorToStart();
      }
      insertBibliography();
    });
  }, []);
  return (
    <div className={classes.root}>
      <Typography variant="h1">ToastUI Editor Example</Typography>
      <Typography variant="body2">v1.1.0</Typography>
      <Divider className={classes.divider} />

      <CiteModal
        editorRef={editorRef}
        open={showCiteModal}
        handleClose={() => setShowCiteModal(false)}
        citations={citations}
        insertedCitations={insertedCitations}
        setInsertedCitations={setInsertedCitations}
      />

      <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue=""
          plugins={[() => tuiCitationPlugin({citations, insertedCitations})]}
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
            'divider',
            {
                type: 'button',
                options: {
                    event: 'insertCitation',
                    tooltip: 'Insert Citation',
                    text: 'C',
                    style: 'color: black; border-color: black; background: white;'
                }
            },
            {
              type: 'button',
              options: {
                  event: 'insertBibliography',
                  tooltip: 'Insert Bibliography',
                  text: 'B',
                  style: 'color: black; border-color: black; background: white;'
              }
          }
        ]}
          usageStatistics={false}
        />
        <Divider className={classes.divider} />
        {
          insertedCitations.length ?
            <div>
              <Typography variant="h6">Selected Citations (for Debugging)</Typography>
              <ol>
                {
                  insertedCitations.map(id => {
                    const result = citations.filter(citation => citation.id === id);
                    if (!result) {return <></>;}
                    return(
                      <li> {result[0].author} - {result[0].year}
                      </li>
                    );
                  })
                }
              </ol>
            </div> : <></>
        }
    </div>
  );
};

export default EditorExample;
