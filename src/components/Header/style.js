import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
    width: "100%",
    "& a": {
      textDecoration: "none",
      padding: "0 9px 0 9px",
      color: "white",
      "&:hover": {
        color: "blue",
      },
    },
  },
  logo: {
    height: "60px",
    marginLeft: "10px",
  },
  Searchicon: {
    backgroundColor: "#6604b9",
    display: "flex ",
    height: "30px",
    alignItems: "center",
    gap: "5px",
    "::placeholder": {},
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "40px",
    },
  },
  search: {
    backgroundColor: "#6604b9",
    color: "white",
    border: "none",
    outline: "none",
  },
  icon: {
    color: "white",
  },
  line: {
    display: "flex",
    width: "2px",
    height: "30px",
    backgroundColor: "blue",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  links: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  btn: {
    display: "flex",
    gap: "20px",
    marginRight: "30px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
