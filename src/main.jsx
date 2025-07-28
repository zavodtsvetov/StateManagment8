import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseReducer from "./AppContextReducer/UserReducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    <UseReducer />
  </StrictMode>
);
