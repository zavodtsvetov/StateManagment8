import { useContext } from "react";
import { NewUserContext } from "../../../context";
export const UserLocalData = () => {
  const { city, con, language } = useContext(NewUserContext);
  return (
    <div>
      <p>Город: {city}</p>
      <p>Страна: {con}</p>
      <p>Язык: {language}</p>
    </div>
  );
};
