import React from "react";

const NavBar = (props) => {
  console.log("NavBar - Reanderd");

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/">
            Navbar
            <span className="badge rounded-pill text-bg-secondary ms-1">
              {props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <>
//         <nav className="navbar bg-light">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="http://localhost:3000/">
//               Navbar
//               <span className="badge rounded-pill text-bg-secondary ms-1">
//                 {this.props.totalCounters}
//               </span>
//             </a>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }

export default NavBar;
