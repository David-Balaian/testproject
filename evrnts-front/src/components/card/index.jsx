import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Box, CardHeader } from "@mui/material";
import Icon from "../Icons";

import "./styles.css";
import { useNavigate } from "react-router-dom";

const MUCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 500,
        marginBottom: 4,
      }}
      className="root_card"
    >
      <CardHeader
        title={item?.title}
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
                navigate(`/event/edit/${item.id}`, { replace: true });
              }}
            >
              <Icon name={"EditIcon"} />
            </IconButton>

            <IconButton aria-label="settings">
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
          {item?.body ||
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
          comments (0)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MUCard;
