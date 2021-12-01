import React from "react";
import { useState } from "react";
const POST = () => {
  const [PlaceName, setPlaceName] = useState("");
  const [NumberofVisitors, setNumberofVisitors] = useState("");
  const postRequestHandler = () => {};
  return (
    <div>
      <input
        type="text"
        value={PlaceName}
        onChange={(e) => set(e.target.value)}
        placeholder="Insert PlaceName here"
      />
      <input
        type="number"
        value={NumberofVisitors}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Insert NumberofVisitors here"
      />
      <button onClick={postRequestHandler}>Insert</button>
      <hr />
      {message ? <h3>Data inserted succesfully!</h3> : None}
    </div>
  );
};
export default POST;