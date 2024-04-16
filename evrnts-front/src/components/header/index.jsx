import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

import "./styles.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useIsUserLogin from "../../hooks/useIsUserLogin";

const Header = () => {
  const isUserLoggedIn = useIsUserLogin();
  return (
    <header>
      <div className="root_header">
        <div>
          <Link to={`/`}>
            <Typography variant="h4" component="h2">
              Events
            </Typography>
          </Link>
        </div>
        <div>
          {!isUserLoggedIn ? (
            <Button variant="contained" href="/login">
              Sign In
            </Button>
          ) : (
            <>
            
              <Button variant="contained" href="/create-event">
                Add Event
              </Button>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title="Chorizo Paella"
                />
              </Card>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
