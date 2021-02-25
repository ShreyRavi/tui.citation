import React, { useState } from 'react';
import EditorExample from "./EditorExample";

const App = () => {
  const [citations, setCitations] = useState([
    {
      name: "Holub",
      year: "2015",
      id: 12345
    },
    {
      name: "Ravi",
      year: "2019",
      id: 12346
    },
    {
      name: "Smith",
      year: "2017",
      id: 12347
    },
    {
      name: "Weston",
      year: "2020",
      id: 12348
    },
    {
      name: "Sawyer",
      year: "1973",
      id: 12349
    },
  ]);
  return (
    <>
      <EditorExample 
        citations={citations}
      />
    </>
  );
};

export default App;
