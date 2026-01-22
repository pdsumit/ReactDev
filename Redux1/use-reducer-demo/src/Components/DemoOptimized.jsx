import React, { useEffect, useReducer } from "react";

function httpReducer(state, action){
  if (action.type === "PENDING") {
    return {
      data: null,
      isLoading: true,
      error: null,
    };
  }

  if (action.type === "COMPLETED") {
    return {
      data: action.payload,
      isLoading: false,
      error: null,
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      isLoading: false,
      error: action.payload,
    };
  }
  throw new Error("Invalid action");
};

async function fetchProduct() {
  const response = await fetch("https://fakestoreapi.com/product/1");
  const data = await response.json();
  return data;
}

const DemoOptimized = () => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    async function makeApiCall() {
      try {
        dispatch({ type: "PENDING" });
        const product = await fetchProduct();
        dispatch({ type: "COMPLETED", payload: product });
      } catch (err) {
        dispatch({ type: "ERROR", payload: err.message });
      }
    }
    makeApiCall();
  },[]);

  return (
    <div>
      <h1>to my reducer demo</h1>
      {httpState.isLoading && <p>Loading a product.....</p>}
      {httpState.error && <p>{httpState.error}</p>}
      {httpState.data && 
        <figure>
          <figcaption>
            <h3>{httpState.data.title}</h3>
          </figcaption>
        </figure>
      }
    </div>
  );
};

export default DemoOptimized;
