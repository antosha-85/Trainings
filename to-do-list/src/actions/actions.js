import * as actionTypes from "./actionTypes";
let nextTodoId = 0;
export const addItem = (text) => {
  return {
    type: actionTypes.ADD_ITEM,
    id: nextTodoId++,
    payload: text,
  };
};

export const deleteItem = (id) => {
  return {
    type: actionTypes.DELETE_ITEM,
    id: id,
    payload: id,
  };
};

export const updateInput = (key, value) => {
    return {
        type: actionTypes.UPDATE_INPUT,
        key: key, 
        value: value
    }
}