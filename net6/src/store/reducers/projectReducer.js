const initState = {
  projects: [
    {
      id: "1",
      title: "hi guys 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quaerat.1",
    },
    {
      id: "2",
      title: "hi guys 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quaerat.2",
    },
    {
      id: "3",
      title: "hi guys 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quaerat.3",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
