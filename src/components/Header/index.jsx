import { useState } from "react";
import { useStyles } from "../../components/Header/style";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../Assets/logo.png";
import Menu from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Button, IconButton, useMediaQuery } from "@material-ui/core";
import Drawerbtn from "../Drawer";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const isActive = useMediaQuery("(max-width: 700px)");
  const isDeactive = useMediaQuery("(min-width: 700px)");
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="" />
          </Link>
        </div>

        <div className={classes.Searchicon}>
          <input
            className={classes.search}
            type="text"
            placeholder="Search items ,Collection, and acounts"
          />
          <SearchIcon className={classes.icon}></SearchIcon>
        </div>
        <div className={classes.links}>
          <a href="/">Explore</a>
          <a href="/">My Profile</a>
          <a href="/">Following</a>
          <a href="/">Market</a>
        </div>
        <div className={classes.line}></div>
        <div className={classes.links}>
          <a href="/">How it works</a>
          <a href="/">Community</a>
        </div>
        {isDeactive && (
          <div className={classes.btn}>
            <Button variant="contained" color="primary">
              Create
            </Button>
            <Button variant="contained">Sign Up</Button>
          </div>
        )}
        {isActive && (
          <div>
            <IconButton onClick={handleOpen}>
              <Menu color="primary" />
            </IconButton>
            <Drawerbtn open={open} handleClose={handleClose} />
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
