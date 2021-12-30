import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  maincontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "none",
      width: "100%",
    },
  },
  Collectionimage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    padding: "5px",
  },
  span: {
    fontSize: "10px",
  },
}));
