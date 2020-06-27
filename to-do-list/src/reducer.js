import * as actionTypes from "./actions/actionTypes";

const initialState = {
  newItem: "",
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newItem = {
        id: 1 + Math.random(),
        value: state.newItem.slice(),
      };
      // copy of current list of items
      const list = [...state.list];
      //add new Item to list
      list.push(newItem);

      // update state with new list and reset newItem input
      setState({
        list,
        newItem: "",
      });
    case actionTypes.DELETE_ITEM:
      //copy current list of items
      const list = [...state.list];
      //filter out item being deleted
      const updatedList = list.filter((item) => item.id !== id);
      setState({ list: updatedList });
      default:
          return state
  }
};

export default reducer