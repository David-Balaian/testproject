import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Box, CardHeader } from "@mui/material";
import Icon from "../Icons";

import "./styles.css";
import { useNavigate } from "react-router-dom";
import { deleteEvent } from "../../GraphQL/events";
import { useSelector } from "react-redux";
import { getActiveUser } from "../../store/user/selectors";
import Notification from "../notificationAlert";
import { useState } from "react";

const MUCard = ({ item, allView }) => {
  const navigate = useNavigate();
  const userData = useSelector(getActiveUser);
  const [notificationData, setNotificationData] = useState({
    type: "",
    message: "",
  });

  const handleDelete = async () => {
    try {
      await deleteEvent({ ...item });
      setNotificationData({
        type: "success",
        message: "Event Edited successfully",
      });
    } catch (err) {
      setNotificationData({ type: "error", message: err.message });
    } finally {
      setTimeout(() => {
        if (allView) {
          navigate("/", { replace: true });
        } else {
          window.location.reload();
        }
      }, 1000);
    }
  };

  return (
    <>
      {<Notification alert={notificationData} />}
      <Card
        sx={{
          maxWidth: 500,
          margin: "0 auto",
          marginBottom: 4,
        }}
        className="root_card"
      >
        <CardHeader
          title={item?.eventName}
          subheader={item?.date || "22/05/1996"}
          action={
            userData.email === item.authorEmail && (
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <IconButton
                  aria-label="settings"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/event/edit/${item.id}`);
                  }}
                >
                  <Icon name={"EditIcon"} />
                </IconButton>

                <IconButton onClick={handleDelete} aria-label="settings">
                  <Icon name={"DeleteIcon"} color={"red"} />
                </IconButton>
              </Box>
            )
          }
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={
              !allView
                ? {
                    textOverflow: "ellipsis",
                    maxWidth: 500,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }
                : {}
            }
          >
            {item?.eventDescription ||
              ` Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textOverflow: "ellipsis",
              maxWidth: 500,
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            comments ({item?.comments?.length || 0})
          </Typography>
        </CardContent>

        {!allView && (
          <Typography
            sx={{
              // borderBottom: "1px solid #ccc",
              cursor: "pointer",
              marginLeft: 2,
              marginBottom: 1,
              textDecoration: "underline",
            }}
            variant="body1"
            color="text.secondary"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/event/${item.id}`, { replace: true });
            }}
          >
            Show More Details
          </Typography>
        )}
      </Card>
    </>
  );
};

export default MUCard;
