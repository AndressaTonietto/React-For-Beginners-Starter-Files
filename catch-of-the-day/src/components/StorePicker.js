import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() { //it is a method that will run before the StorePicker Component is created
  // super();
  // // console.log('Gonna create a component!');
  // this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  goToStore = event => {
    /*if you need to access "this" inside of a custom method you must use this 
    syntax or use the contructor to bind*/
    // console.log("Going to store");

    // 1. Stop the form from submitting
    event.preventDefault();

    // 2. Get the text from that input
    // const storeName = document.querySelector ===> Golden Rule in React: do not touch the DOM
    const storeName = this.myInput.current.value;

    // 3. Change the page to /store/wahtever-they-entered
    this.props.history.push(`/store/${storeName}`);
    /* StorePicker is a child of the Router, so we a ctually have access to the 
    methods of the Router */
  };

  handleClick() {
    alert("Heyyyyy!");
  }

  //   componentDidMount() {
  //     console.log("MOUNTED!!!");
  //   }

  render() {
    // console.log(this);
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* comments (there is no regular html or doubleslash comments, just regular block comments) */}
        <h2>Please Enter A Store</h2>

        {/* <button onClick={this.handleClick}>CLick me!</button> */}

        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store &rarr;</button>
      </form>
    );
  }
}

export default StorePicker;


/*state is essencially just an object, an object that lives inside of a component that 
stores all of the data that that component and maybe some of its children may need*/