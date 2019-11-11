import React from "react";
import { formatPrice } from "../helpers"; //this is a named import

class Order extends React.Component {
    /* 
    *when the render function starts to get a little bit overloaded, 
    meaning that that is a lot of code going on here and as soon as you 
    find yourself having a bit to much code inside of your render function 
    that probably means that you are doing to much in a specific component
    and you could probably shawl of some of that complexity to a separate 
    component
    *but you sometimes it can be really complex for 1 render function and 
    it still doenst make a whole lot a sense to make a separate component just 
    for this 1 item because i am really not going to be using it at anywhere 
    else inside of it. So you can do separate render functions inside of a 
    single component
    */

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";
        // Make sure the fish is loaded before we continue
        if (!fish) return null;
        if (!isAvailable) {
            return <li key={key}>Sorry {fish ? fish.name : "fish"} is no longer available</li>;
        }
        return (
            <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        );
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === "available";
            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)} {/* {orderIds.map(key => <li>{key}</li>)} */}
                </ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;
