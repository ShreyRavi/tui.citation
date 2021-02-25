import React, { useState } from 'react';
import EditorExample from "./EditorExample";

const App = () => {
  // feed in example data for show
  const [citations, setCitations] = useState([
    {
      title: "Comparison of Oreos and Sun Chips for Health Reasons",
      author: "Holub",
      year: "2015",
      id: 12345
    },
    {
      title: "An Investigation In Working Late Hours",
      author: "Ravi",
      year: "2019",
      id: 12346
    },
    {
      title: "A Meta-Analysis of Netflix Trends",
      author: "Smith",
      year: "2017",
      id: 12347
    },
    {
      title: "Health Benefits Of Frequent Brushing",
      author: "Weston",
      year: "2020",
      id: 12348
    },
    {
      title: "A Meta-Analysis of Hulu Trends",
      author: "Sawyer",
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
