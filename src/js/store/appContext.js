import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

/**
 * ! Context injector
 * * From template
 * * Edited AslanSN - 22-06-13
 * @param {React Component} PassedComponent
 * @returns Wrapper
 */
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {

    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );
    /**
     * ! Sets the store before printing components
     */
    useEffect(() => {
      state.actions.handleData();
      state.actions.familiesValuesRepetitions();
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
