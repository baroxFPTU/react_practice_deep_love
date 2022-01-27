import { useState, useEffect } from "react";

function useCountdown(amount, callback) {
  const [countdown, setCountdown] = useState(amount);
  useEffect(() => {
    const timerId =
      countdown > 0
        ? setInterval(() => {
            setCountdown(countdown - 1);
          }, 1000)
        : callback();

    return () => {
      return clearInterval(timerId);
    };
  }, [countdown, callback]);

  return [countdown];
}

export default useCountdown;
