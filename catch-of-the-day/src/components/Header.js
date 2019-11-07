import React from "react";

// class Header extends React.Component {
//   /* if your component only has a render
//     method than is unnecessary to do do this
//     whole song and dance  */
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

// instead, you can use a stateless functional component
// function Header(props) {
//   return (
//     <header className="top">
//       <h1>
//         Catch
//         <span className="ofThe">
//           <span className="of">Of</span>
//           <span className="the">The</span>
//         </span>
//         Day
//       </h1>
//       <h3 className="tagline">
//         <span>{props.tagline}</span>
//       </h3>
//     </header>
//   );
// }

const Header = (
  props // implicit return
) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
