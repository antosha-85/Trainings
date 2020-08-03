import React, { useEffect, useCallback, useReducer, useMemo } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

// const httpReducer = (currentHttpState, action) => {
//   switch (action.type) {
//     case "SEND":
//       return {
//         loading: true,
//         error: null,
//       };
//     case "RESPONSE":
//       return {
//         ...currentHttpState,
//         loading: false,
//       };
//     case "ERROR":
//       return {
//         loading: false,
//         error: action.errorMessage,
//       };
//     case "CLEAR":
//       return {
//         ...currentHttpState,
//         error: null,
//       };
//     default:
//       throw new Error("Should not be reached!");
//   }
// };

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const {
    isLoading,
    data,
    error,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear,
  } = useHttp();
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [httpState, dispatchHttp] = useReducer(httpReducer, {
  //   loading: false,
  //   error: null,
  // });
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://react-hooks-update-e9a47.firebaseio.com/ingredients.json")
  //     .then((response) => {
  //       response.json();
  //       setIsLoading(false);
  //     })
  //     .then((responseData) => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       // setUserIngredients(loadedIngredients);
  //       dispatch();
  //     });
  // }, []);

  useEffect(() => {
    if (!isLoading && reqIdentifier === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === "ADD_INGREDIENT") {
      dispatch({ type: "ADD", ingredient: { id: data.name, ...reqExtra } });
    }
    // console.log("RENDERING INGREDIENTS", userIngredients);
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({
      type: "SET",
      ingredients: filteredIngredients,
    });
  }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        `https://react-hooks-update-e9a47.firebaseio.com/ingredients/.json`,
        "POST",
        JSON.stringify(ingredient),
        ingredient,
        "ADD_INGREDIENT"
      );
      // setIsLoading(true);
      //   dispatchHttp({ type: "SEND" });
      //   fetch(
      //     "https://react-hooks-update-e9a47.firebaseio.com/ingredients.json",
      //     {
      //       method: "POST",
      //       body: JSON.stringify(ingredient),
      //       headers: { "Content-Type": "application/json" },
      //     }
      //   )
      //     .then((response) => {
      //       // setIsLoading(false);
      //       dispatchHttp({ type: "RESPONSE" });
      //       return response.json();
      //     })
      //     .then((responseData) => {
      //       // setUserIngredients((prevIngredients) => [
      //       //   ...prevIngredients,
      //       //   { id: responseData.name, ...ingredient },
      //       // ]);
      //       dispatch({
      //         type: "ADD",
      //         ingredient: {
      //           id: responseData.name,
      //           ...ingredient,
      //         },
      //       });
      //     });
    },
    [sendRequest]
    // [dispatchHttp]
  );
  //adding a dependancy dispatchHttp is not necessary it's managed by React and will not cause rerender
  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://react-hooks-update-e9a47.firebaseio.com/ingredients/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId,
        "REMOVE_INGREDIENT"
      );
      // setIsLoading(true);
      // dispatchHttp({ type: "SEND" });
      // fetch(
      //   `https://react-hooks-update-e9a47.firebaseio.com/ingredients/${ingredientId}.json`,
      //   {
      //     method: "DELETE",
      //   }
      // )
      //   .then((response) => {
      //     // setIsLoading(false);

      //     dispatchHttp({ type: "RESPONSE" }); // setUserIngredients((prevIngredients) =>
      //     //   prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
      //     // );
      //     dispatch({ type: "DELETE", id: ingredientId });
      //   })
      //   .catch((error) => {
      //     // setError(error.message);
      //     // setIsLoading(false);
      //     dispatchHttp({ type: "ERROR", errorMessage: error.message });
      //   });
    },
    [sendRequest]
  );

  // const clearError = useCallback(() => {
  //   // setError(null);
  //   dispatchHttp({ type: "CLEAR" });
  // }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {/* <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        /> */}
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
