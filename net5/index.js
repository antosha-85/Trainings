const {createStore} = Redux;
const initState = {
  todos: [],
  posts: []
}
const myreducer = (state = initState, action) => {
  console.log(action, state)
  if(action.type === 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.todo],
      
    }
  }
  if(action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  }
}

const store = createStore(myreducer);

store.subscribe(()=> {
  console.log('state updated');
  console.log(store.getState())
})

const todoAction = {
  type: 'ADD_TODO',
  todo: 'buy milk'
}
const todoAction1 = {
  type: 'ADD_TODO', 
  todo: 'sleep a bit more'
}

const todoAction2 = {
  type: 'ADD_POST',
  post: 'How to become a good developer'
}
store.dispatch(todoAction);
store.dispatch(todoAction1);
store.dispatch(todoAction2)