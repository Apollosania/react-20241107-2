import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { Title } from "../typography/title.jsx";

export const LayoutTitle = () => {
  const { title } = useLayoutTitle();

  if (!title) {
    return null;
  }

  return <Title type={"reverse"}>{title}</Title>;
};
