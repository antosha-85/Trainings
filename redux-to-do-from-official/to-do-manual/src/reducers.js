import { combineReducers } from "redux";
import {
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters,
} from "./actions";

// const { SHOW_ALL } = VisibilityFilters;

//don't need this initial state any longer

// const initialState = {
//   visibilityFilter: visibilityFilters.SHOW_ALL,
//   todos: [],
// };

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        },
      ];
    case TOGGLE_TODO:
      // return state.map((todo, index) => {
      //   if (todo.index === action.index) {
      //     return Object.assign({}, todo, {
      //       completed: !todo.completed,
      //     });
      //   }
      //   return todo;
      // });
      return state.map(todo => 
        todo.id === action.id ? { ...todo, completed: !todo.completed}: todo)
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;

//old code

// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibility, action),
//     todos: todos(state.todos, action)
//   }
// }

// function todoApp(state = {initialState}, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter,
//       });
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todo: todos(state.todos, action),
//       });
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
//         todos: todos(state.todos, action),
//       });
//     default:
//       return state;
//   }
// }
// function todoApp(state = initialState, action) {
//   //   if (typeof state === "undefined") {
//   //     return initialState;
//   //   }
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter,
//       });
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       });
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
//         todos: state.todos.map((todo, index) => {
//           if (index === action.index) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed,
//             });
//           }
//           return todo;
//         }),
//       });
//     default:
//       return state;
//   }
// }
