import { useProgress } from "./use-progress.js";

import style from "./progress-bar.module.css";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div className={style.progressBar} style={{ width: `${progress}%` }}></div>
  );
};
