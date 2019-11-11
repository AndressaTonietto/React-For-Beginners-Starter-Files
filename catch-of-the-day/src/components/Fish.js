import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  // handleClick = () => { 
  //   /*
  //   *this might seen like a little bit overhead, like do why we have 
  //   do make a function just for this one liner and the answer is that 
  //   we dont have to. You can also just do this inline. So generally if
  //   you just need to do it once its fine to do it inline, otherwise 
  //   you can do a secondary method like this one

  //   * inline would be onClick={() => this.props.addToOrder(this.props.index)}
  //   */
  //   this.props.addToOrder(this.props.index);
  // }
  render() {
    // const image = this.props.details.image;
    // const name = this.props.details.name;
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available"
    return (
      <li className="menu-fish">
        {/* <img src={this.props.details.image} alt="" /> */}
        <img src={image} alt="" />
        <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}> {/* onClick={this.handleClick} */}
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
