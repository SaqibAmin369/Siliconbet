import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    backgroundColor: "black",
    color: "white",
    marginBottom: "40px",
  },
  image: {
    width: "250px",
    height: "300px",
  },
  imgpara: {
    position: "relative",
    display: "inline-block",
  },
  title: {
    position: "absolute",
    zIndex: 999,
    margin: "0 auto",
    left: 0,
    right: 0,
    padding: "20px 0 20px 20px",
    top: "81%",
    background: "rgba(0, 0, 0, 0.8)",
    fontFamily: " Arial,sans-serif",
    color: "#fff",

    width: "fit-content%",
  },
  spanpara: {
    fontSize: "10px",
    marginBottom: "10px",
  },
});
