import React from "react";
import { Avatar } from "@mui/material";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useStateValue } from "./StateProvider";
// import Avatar from '@mui/material/Avatar';

const Header = () => {

  const [{user}]=useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Clever Programmer" />
      </div>
      <div className="header__right">
        <HelpOutlineOutlinedIcon />
      </div>
    </div>
  );
};

export default Header;
