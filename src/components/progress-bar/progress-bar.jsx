import { useProgress } from "./use-progress.js";

import style from "./style.module.css";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      className={style["progress-bar"]}
      style={{ width: `${progress}%` }}
    ></div>
  );
};
