import { useEffect, useState } from "react";

const getInitialVisibility = () => {
  if (typeof document === "undefined") {
    return true;
  }

  return !document.hidden;
};

const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isVisible;
};

export default usePageVisibility;
