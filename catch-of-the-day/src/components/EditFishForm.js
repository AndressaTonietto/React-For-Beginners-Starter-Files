import React from "react";

class EditFishForm extends React.Component {
    handleChange = event => {
        console.log(event.currentTarget.value);

        // update that fish
        // q. Take a copy of the current fish
        const updateFish = { 
            ...this.props.fish, 
            // []:name: event.currentTarget.value
        };
        console.log(updateFish);
    }

    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option onChange={this.handleChange} value="available">Fresh!</option>
                    <option onChange={this.handleChange} value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
            </div>
        );
    }
}

export default EditFishForm;
