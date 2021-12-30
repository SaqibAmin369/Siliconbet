import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#140227",
    width: "100%",
    "& h1": {
      color: "white",
    },
    "& h4": {
      color: "#6604b9",
      padding: "20px 0 20px 0",
    },
  },
  image1: {
    width: "400px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  btn: {
    display: "flex",
    gap: "10rem",
  },
});
