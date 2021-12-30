import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cardflex: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "black",
    justifyContent: "center",
    gap: "20px",
  },
  main: {
    backgroundColor: "black",
    color: "#6604b9",
    marginTop: "-25px",
    width: "100%",
    "& h1": {
      marginLeft: "110px",
    },
  },
  Collection: {
    display: "grid",
    gridTemplateColumns: "  1fr 1fr 1fr 1fr 1fr 1fr",
    backgroundColor: "#140227",
    color: "white",
    justifyContent: "center",
    Height: "400px",
    padding: "70px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      padding: "none",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: "20px",
    },
    topcollection: {
      backgroundColor: "black",
    },
  },
  SecondCard: {
    display: "flex",
    flexWrap: "wrap",

    backgroundColor: "#140227",
    justifyContent: "center",
    gap: "40px",
  },
  secondmain: {
    backgroundColor: "#140227",
    color: "#6604b9",
    marginTop: "-25px",
    width: "100%",
    "& h1": {
      marginLeft: "110px",
    },
  },
}));
