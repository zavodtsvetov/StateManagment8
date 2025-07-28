export const reducer = (state, action) => {
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
// я его не экспортил
