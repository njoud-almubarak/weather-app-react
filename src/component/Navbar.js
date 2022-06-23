import '../App.css';
import React from 'react';
const Navbar= ({Mynav})=>{
    
    return (
    <div>
         <div className="container-nav " >
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/" >{Mynav}</a>
    </div>
  </nav>
</div>

    </div>
    )
}

export default Navbar;