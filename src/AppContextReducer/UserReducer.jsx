import { useEffect, useState, useReducer } from "react";
import { Header, UserBlock } from "./components";
import { AppContext, NewUserContext } from "./context.js";
import {
  getUserFromServer,
  getAnotherUserFromServer,
  newUserInfo,
} from "./components/users-from-server";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER_DATA": {
      return payload;
    }
    case "SET_USER_AGE": {
      return { ...state, age: payload };
    }
    case "SET_USER_NAME": {
      return { ...state, name: payload };
    }
    default:
      return state;
    // ничего не делаем
  }
};

const UseReducer = () => {
  const [userData, dispatch] = useReducer(reducer, {});

  const newUserData = newUserInfo();
  useEffect(() => {
    const userFromServer = getUserFromServer();
    dispatch({ type: "SET_USER_DATA", payload: userFromServer });
  }, [getUserFromServer]);
  const onUserChange = () => {
    const anotherUserFromServer = getAnotherUserFromServer();
    dispatch({ type: "SET_USER_DATA", payload: anotherUserFromServer });
  };
  const onStartUserChange = () => {
    const userFromServer = getUserFromServer();
    dispatch({ type: "SET_USER_DATA", payload: userFromServer });
  };
  return (
    <>
      <strong> .useReducer()</strong>

      <AppContext.Provider value={{ userData, dispatch }}>
        <NewUserContext.Provider value={newUserData}>
          <div style={{ textAlign: "center" }}>
            <Header />
            <hr />
            <UserBlock />
            <button onClick={onUserChange}>Смена юзера</button>
            <button onClick={onStartUserChange}>Смена юзера обратно</button>
          </div>
        </NewUserContext.Provider>
      </AppContext.Provider>
    </>
  );
};
export default UseReducer;
