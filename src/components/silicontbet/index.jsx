import Image1 from "../../Assets/image1.png";
import { Button } from "@material-ui/core";
import { useStyles } from "./style";
const Siliconbet = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div>
          <h1>
            WELCOME TO THE <br />
            <span>SiliconBet</span>
          </h1>
          <div>
            <h4>The easiest and most secure NFT marketpalce</h4>
          </div>
          <div className={classes.btn}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Explore
            </Button>
            <Button className={classes.button} variant="contained">
              Mint
            </Button>
          </div>
        </div>
        <div>
          <img className={classes.image1} src={Image1} alt="" />
        </div>
      </div>
    </>
  );
};
export default Siliconbet;
