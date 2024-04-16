import { useState, useEffect } from "react";

function useIsUserLogin() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsUserLoggedIn(!!token);
  }, []);

  return isUserLoggedIn;
}

export default useIsUserLogin;
