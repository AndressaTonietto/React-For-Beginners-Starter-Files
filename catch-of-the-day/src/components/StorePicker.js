import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  render() {
      console.log(this)
    return (
      <form className="store-selector">
        {/* comments (there is no regular html or doubleslash comments, just regular block comments) */}
        <h2>Please Enter A Store</h2>
        <input
          type="text"
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
