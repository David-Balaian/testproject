import React, { useState } from "react";
import NewEventItem from "../components/newEventItem";

const CreateEvent = () => {
  const [data, setData] = useState({ date: "", description: "", title: "" });

  const handleSubmit = () => {
    console.log(
      "%csrc\routeseditEvent.jsx:2",
      "color: white; background-color: #26bfa5;"
    );
  };

  const changeData = (value, key) => {
    setData((item) => {
      return { ...item, [key]: value };
    });
  };

  return (
    <div>
      <NewEventItem
        eventDate={data.date}
        eventDescription={data.description}
        eventTitle={data.title}
        handleSubmit={handleSubmit}
        changeData={changeData}
      />
    </div>
  );
};

export default CreateEvent;
