import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  maincontainer: {
    backgroundColor: "black",
    display: "flex",
    width: "100%",
  },
  container: {
    backgroundColor: "#140227",
    minHeight: "250px",
    marginTop: "40px",
    marginBottom: "40px",
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
    alignItems: "center",
    alignContent: "center",
    paddingLeft: "50px",
    justifyContent: "center",
    color: "white",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
      justifyContent: "center",
      gap: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
  },
  border: {
    borderLeft: "1px solid white",
    padding: "0px 10px 0 10px",
  },
  lastpara: {},
}));
