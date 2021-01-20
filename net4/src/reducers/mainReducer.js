const initState = {
  posts: [
    {
      id: "1",
      title: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius ipsa natus. Optio, dicta harum?",
    },
    {
      id: "2",
      title: "Lorem ipsum dolor sit amet consectetur.",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius ipsa natus. Optio, dicta harum?",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit.",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius ipsa natus. Optio, dicta harum?",
    },
  ],
};

const mainReducer = (state = initState, action) => {
  return state;
};

export default mainReducer;
