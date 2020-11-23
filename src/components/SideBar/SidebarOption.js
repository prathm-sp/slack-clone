import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import db from "../../firebase";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
