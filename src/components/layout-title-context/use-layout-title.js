import { useContext } from "react";
import { LayoutTitleContext } from "./index.js";

export const useLayoutTitle = () => useContext(LayoutTitleContext);
