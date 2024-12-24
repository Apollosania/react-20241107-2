import { useState } from "react";
import { LayoutTitleContext } from "./index.js";

export const LayoutTitleContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  return (
    <LayoutTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </LayoutTitleContext.Provider>
  );
};
