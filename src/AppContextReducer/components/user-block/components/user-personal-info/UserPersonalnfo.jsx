import { useContext } from "react";
import { AppContext } from "../../../../context";
export const UserPersonalInfo = () => {
  const { userData, dispatch } = useContext(AppContext);
  const { name, age, email, phone } = userData;
  const onUserUpdate = () => {
    const newUserData = { name: "Новый я", age: 3000, email, phone };
    // setUserData(newUserData)
    dispatch({ type: "SET_USER_DATA", payload: newUserData });
  };
  const onUserAgeDecrease = () => {
    dispatch({ type: "SET_USER_AGE", payload: 15 + 500 });
  };
  const onUserChangeName = () => {
    dispatch({ type: "SET_USER_NAME", payload: "N. O. A. H." });
  };
  return (
    <div>
      <h3>Персональные данные: </h3>
      <div>Имя: {name} </div>
      <button disabled={true} onClick={onUserChangeName}>
        Сменить имя
      </button>

      <div>Возраст: {age}</div>
      <button onClick={onUserUpdate}>Обновить пользователя</button>
      <button onClick={onUserAgeDecrease}>Уменьшить возраст</button>
    </div>
  );
};
