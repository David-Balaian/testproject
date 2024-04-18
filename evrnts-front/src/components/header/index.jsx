import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { getActiveUser, getUserStatus } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { poolData } from "../../utils/constants";
import { userSlice } from "../../store/user/slice";
import { jwtDecode } from "jwt-decode";
import { TH_signout } from "../../store/user/thunk";

import "./styles.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(getUserStatus);
  const userData = useSelector(getActiveUser);

  const handleSignout = async () => {
    dispatch(TH_signout());
  };

  useEffect(() => {
    const LastAuthUser = localStorage.getItem(
      `CognitoIdentityServiceProvider.${poolData.ClientId}.LastAuthUser`
    );
    const idToken = localStorage.getItem(
      `CognitoIdentityServiceProvider.${poolData.ClientId}.${LastAuthUser}.idToken`
    );
    if (idToken) {
      const data = jwtDecode(idToken);
      dispatch(
        userSlice.actions.setUserData({
          firstName: data.given_name,
          lastName: data.family_name,
          email: data.email,
        })
      );
    }
  }, [isLogged]);

  return (
    <header>
      <div className="root_header">
        <div>
          <Link to={`/`}>
            <Button variant="contained">Events</Button>
          </Link>
        </div>
        <div>
          {!isLogged ? (
            <Link to={"/login"} variant="contained">
              <Button variant="contained">Sign In</Button>
            </Link>
          ) : (
            <Box sx={{ display: "flex", height: "50px" }}>
              <Card sx={{ padding: 0 }}>
                <CardHeader
                  sx={{ padding: "6px 6px 0 6px" }}
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {userData?.firstName?.charAt?.(0)}
                    </Avatar>
                  }
                  title={`${userData?.firstName} ${userData?.lastName}`}
                />
              </Card>
              <Button
                onClick={handleSignout}
                variant="contained"
                sx={{ marginLeft: 2 }}
              >
                Sign out
              </Button>
            </Box>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
