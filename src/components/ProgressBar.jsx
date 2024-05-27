import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const time = setInterval(() => {
      console.log("Remaining Time is running");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Remaining Time is stopped");
      clearInterval(time);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
}
