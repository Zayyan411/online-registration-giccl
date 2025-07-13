import React, { useState, useContext, useMemo } from "react";
import { Dropdown } from "react-bootstrap";
import { ActiveContext } from "../../App";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { user } = useContext(ActiveContext);

  const initials = useMemo(() => {
    if (!user?.name) return "";
    const parts = user.name.trim().split(/\s+/);
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }, [user]);
  const handleLogout = () => {
    localStorage.clear("accessToken");
    navigate("/");
  };
  return (
    <Dropdown
      show={show}
      onToggle={() => setShow(!show)}
      className="drop_down_icon"
    >
      <Dropdown.Toggle
        as="span"
        // onClick={}
        style={{
          cursor: "pointer",
          display: "inline-block",
        }}
        className="dropdown-toggle"
      >
        {/* ✅ اگر image موجود ہو تو دکھائیں، ورنہ حرف دکھائیں */}
        {user?.image ? (
          <img
            src={user.image}
            alt="Profile"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "28px",
              height: "28px",
              fontSize: "10px",
              fontWeight: "bold",
              backgroundColor: "#3b0a45", // Dark pink
              color: "#ff69b4",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {initials}
          </div>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { DropdownMenu };
