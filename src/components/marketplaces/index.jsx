import threeimages from "../../Assets/threepictures.png";
import { useStyles } from "./style";
const Marketplaces = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.maincontainer}>
        <div>
          <h1>
            The easiest and most <br /> secure NFT marketpalce
          </h1>
          <p>
            N ifty G ateway is the premier marketplace for N ifties, which are
            digital <br /> items you can truly own . Digital I tems have e x
            isted for a long time, but <br /> never like this .
          </p>
        </div>
        <div className={classes.image}>
          <img src={threeimages} alt="" />
        </div>
      </div>
    </>
  );
};
export default Marketplaces;
