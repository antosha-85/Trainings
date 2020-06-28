import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./actions/actionTypes";
import { addItem, deleteItem, updateItem } from "./actions/actions";
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     newItem: "",
  //     list: [],
  //   };
  // }

  // updateInput = (key, value) => {
  //   //update react state
  //   this.setState({
  //     [key]: value,
  //   });
  // };

  // addItem = () => {
  //   //create item with unique id
  //   const newItem = {
  //     id: 1 + Math.random(),
  //     value: this.props.newItem.slice(),
  //   };
  //   console.log("App -> addItem -> newItem", newItem);
  //   // copy of current list of items
  //   const list = [...this.props.list];
  //   //add new Item to list
  //   list.push(newItem);

  //   // update state with new list and reset newItem input
  //   this.setState({
  //     list,
  //     newItem: "",
  //   });
  // };

  // deleteItem = (id) => {
  //   //copy current list of items
  //   const list = [...this.props.list];
  //   //filter out item being deleted
  //   const updatedList = list.filter((item) => item.id !== id);
  //   this.setState({ list: updatedList });
  // };
  render() {
    let todoList = <p>You have no todos!</p>;
    if (this.props.list.length > 0) {
      todoList = this.props.list.map((item) => {
        return (
          <li key={item.id}>
            {item.value}
            <button onClick={() => this.props.onDeleteItem(item.id)}>X</button>
          </li>
        );
      });
    }
    return (
      <div className="App">
        <div>
          Add an Item...
          <br />
          <input
            type="text"
            placeholder="Type item here"
            value={this.props.newItem}
            onChange={(e) => this.props.onUpdateInput("newItem", e.target.value)}
          ></input>
          <button onClick={this.props.onAddItem}>Add</button>
          <ul>{todoList}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newItem: state.newItem,
    list: state.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: () =>
      dispatch({
        type: actionTypes.ADD_ITEM,
      }),
      onDeleteItem: (id) => 
      dispatch({
        type: actionTypes.DELETE_ITEM
      }),
      onUpdateInput: (key, value) => 
      dispatch({
        type: actionTypes.UPDATE_INPUT
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
