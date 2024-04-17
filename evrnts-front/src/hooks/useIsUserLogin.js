import { useState, useEffect } from "react";
import { poolData } from "../utils/constants";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../store/user/slice";
import { getActiveUser, getUserStatus } from "../store/user/selectors";

function useIsUserLogin() {
  const dispatch = useDispatch()
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const userData = useSelector(getActiveUser)

  useEffect(() => {
    const LastAuthUser = localStorage.getItem(`CognitoIdentityServiceProvider.${poolData.ClientId}.LastAuthUser`);
    const idToken = localStorage.getItem(`CognitoIdentityServiceProvider.${poolData.ClientId}.${LastAuthUser}.idToken`);
    setIsUserLoggedIn(!!idToken);
    if(idToken){
      const data = jwtDecode(idToken)
      dispatch(userSlice.actions.setUserData({
        firstName: data.given_name,
        lastName: data.family_name,
        email: data.email,
      }))
    }
  }, []);

  return {isUserLoggedIn, userData};
}

export default useIsUserLogin;
