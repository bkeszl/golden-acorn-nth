import React from "react";
import {Link} from 'react-router-dom';


const nav = () => {
  return (
    <div>
      <Link to="/">Home page</Link>
      <Link to="/simple/states/">With states</Link>
    </div>
  );
}

export default nav;