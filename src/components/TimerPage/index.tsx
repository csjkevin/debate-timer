import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

interface Props {
  title?: string;
  initialTime?: number;
}

const SingleTimer: React.FC<Props> = (props) => {
  const { title, initialTime = 0 } = props;

  const [timer, setTimer] = useState<NodeJS.Timeout | null>();
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  const clearTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const handleTimerControl = () => {
    if (timer) {
      clearTimer();
    } else {
      setTimer(
        setInterval(() => {
          setRemainingTime((prevState) => {
            if (prevState > 0) {
              return prevState - 1;
            } else {
              clearTimer();
              return prevState;
            }
          });
        }, 1000)
      );
    }
  };

  const handleTimerReset = () => {
    clearTimer();
    setRemainingTime(initialTime);
  };

  return (
    <>
      <div className="title">{title}</div>
      <div className={`${styles.time} ${remainingTime < 31 ? styles.red : ""}`}>
        {Math.floor(remainingTime / 60)}:
        {String(remainingTime % 60).padStart(2, "0")}
      </div>
      <div className={styles.control}>
        <button onClick={handleTimerControl} disabled={!remainingTime}>
          {timer ? "暂停" : "开始"}
        </button>
        <button onClick={handleTimerReset}>重置</button>
        <Link to="">
          <button>结束</button>
        </Link>
      </div>
    </>
  );
};

export default SingleTimer;
