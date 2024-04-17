import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Box, CardHeader } from "@mui/material";
import Icon from "../Icons";

import "./styles.css";
import { useNavigate } from "react-router-dom";
import { createNewEvent, deleteEvent } from "../../GraphQL/events";
import { modalSlice } from "../../store/modal/slice";
import { useDispatch } from "react-redux";

const MUCard = ({ item }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteEvent({...item})
  }

  return (
    <Card
      sx={{
        maxWidth: 500,
        marginBottom: 4,
      }}
      className="root_card"
    >
      <CardHeader
        title={item?.eventName}
        subheader={item?.date || "22/05/1996"}
        action={
          <Box
            sx={{
              display: "flex",
            }}
          >
            <IconButton
              aria-label="settings"
              onClick={(e) => {
                e.preventDefault();
                dispatch(modalSlice.actions.setModal({open: true, item}))
              }}
            >
              <Icon name={"EditIcon"} />
            </IconButton>

            <IconButton onClick={handleDelete} aria-label="settings">
              <Icon name={"DeleteIcon"} color={"red"} />
            </IconButton>
          </Box>
        }
      />
      <CardContent
        onClick={(e) => {
          e.preventDefault();
          navigate(`/event/${item.id}`, { replace: true });
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textOverflow: "ellipsis",
            maxWidth: 500,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
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
    </Card>
  );
};

export default MUCard;
