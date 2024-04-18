import { Alert } from "@mui/material";

const Notification = ({ alert }) => {
  console.log(
    "%cevrnts-frontsrccomponents\notificationAlertindex.jsx:4 alert",
    "color: #26bfa5;",
    alert
  );
  return (
    <>
      <Alert
        severity={alert.type}
        sx={{
          position: "absolute",
          zIndex: 111,
          top: 10,
          width: 350,
          right: 10,
        }}
      >
        {alert.message}
      </Alert>
    </>
  );
};

export default Notification;
