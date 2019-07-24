import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props){
  return <div>
   <ul>
     <li>
       <Link to="/overview">Overview</Link>
     </li>
     <li>
       <Link to="/DisplaySingleList">Interested</Link>
     </li>
     <li>
       <Link to="/DisplaySingleList">Applied</Link>
     </li>
     <li>
       <Link to="/DisplaySingleList">Interviewing</Link>
     </li>
     <li>
       <Link to="/DisplaySingleList">Denied</Link>
     </li>
   </ul>
  </div>
}

export default NavBar;