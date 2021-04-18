import React, {useRef} from "react";
export const useFetch = (url) => {
  const isCurrent = useRef(true)
  const [state, setState] = React.useState({ data: null, loading: true });
  React.useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((response) => response.text())
      .then((res) => {
        setTimeout(() => {
          setState({ data: res, loading: false });
        }, 2000);
      });
  }, [url, setState]);
  return state;
};
