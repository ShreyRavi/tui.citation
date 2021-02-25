import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const App = () => {
  return (
    <>
      <h1>ToastUI Editor Example</h1>
      <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="wysiwyg"
          initialValue="hello"
          usageStatistics={false}
        />
    </>
  );
};

export default App;
