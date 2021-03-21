import React from "react";
export const useFetch = (url) => {
  const [state, setState] = React.useState({ data: null, loading: true });
  React.useEffect(() => {
    setState(state=> ({ data: state.data, loading: true }));
    fetch(url)
      .then((response) => response.text())
      .then((res) => {
        setState({ data: res, loading: false });
      });
  }, [url, setState]);
  return state;
};
