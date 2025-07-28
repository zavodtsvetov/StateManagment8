import { useContext } from "react";
import { AppContext } from "../../../../context";
export const UserContacts = () => {
  const { email, phone } = useContext(AppContext);
  return (
    <div>
      <h4>Контакты:</h4>
      <div>Почта: {email} </div>
      <div>Тлф: {phone}</div>
    </div>
  );
};
