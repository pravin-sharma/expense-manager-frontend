import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

export const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div className={`alert alert-${alert.type}`} key={alert.id} role="alert">
        {alert.msg}
      </div>
    ))
  );
};
