import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  linkstop: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly ",
    alignItems: "center",
    gap: "30px",
    fontWeight: "bolder",
    fontSize: "20px",
    backgroundColor: "blue",
    minHeight: "60px",
    width: "100%",

    "& a": {
      textDecoration: "none",
      color: "white",

      "&:hover": {
        color: "black",
      },
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    backgroundColor: "#140227",
    width: "100%",
    alignContent: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      padding: "20px 0 20px 0px",
    },
  },
  imagediv: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
  },
  prices: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "40px",
  },
  btns: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "40px",
    marginBottom: "40px",
  },
}));
