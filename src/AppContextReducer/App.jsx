import { useEffect, useState } from "react";
import { Header, UserBlock, UserLocation } from "./components";
import { AppContext, NewUserContext } from "./context";
import {
  getUserFromServer,
  getAnotherUserFromServer,
  newUserInfo,
} from "./components/users-from-server";

const newUserData = newUserInfo();

const App = () => {
  const [userData, setUserData] = useState({});

  const dispatch = (action) => {
    const { type, payload } = action;

    switch (type) {
      case "SET_USER_DATA": {
        setUserData(payload);
        break;
      }
      case "SET_USER_AGE": {
        setUserData({ ...userData, age: payload });
        break;
      }
      case "SET_USER_NAME": {
        setUserData({ ...userData, name: payload });
        break;
      }
      default:
      // ничего не делаем
    }
  };

  useEffect(() => {
    const userFromServer = getUserFromServer();
    setUserData(userFromServer);
  }, [getUserFromServer]);
  const onUserChange = () => {
    const anotherUserFromServer = getAnotherUserFromServer();
    setUserData(anotherUserFromServer);
  };
  const onStartUserChange = () => {
    const userFromServer = getUserFromServer();
    setUserData(userFromServer);
  };
  return (
    <>
      <strong> .reducer</strong>

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
export default App;
