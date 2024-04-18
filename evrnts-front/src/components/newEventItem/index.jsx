import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import "./stiles.css";

const NewEventItem = ({
  eventTitle,
  eventDescription,
  eventDate,
  changeData,
  handleSubmit,
  isDisabled = false,
}) => {
  return (
    <Card
      className="root_card"
      sx={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <CardContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
          }}
        >
          <Box>
            <Typography variant="h6"> Event Title </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              type="text"
              id="title"
              value={eventTitle}
              onChange={(e) => {
                changeData(e.target.value, "eventName");
              }}
              placeholder="title"
              size="small"
            />
          </Box>
          <Box>
            <Typography variant="h6"> Event Description </Typography>
            <textarea
              className="text-area"
              name="description"
              rows="6"
              cols="61"
              value={eventDescription}
              onChange={(e) => {
                changeData(e.target.value, "eventDescription");
              }}
            />
          </Box>
          <Box>
            <Typography variant="h6"> Event Date </Typography>
            <input
              className="date-input"
              type="date"
              value={eventDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => {
                changeData(e.target.value, "eventDate");
              }}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isDisabled}
          >
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewEventItem;
