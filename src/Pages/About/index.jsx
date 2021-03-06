import { Button } from "@material-ui/core";
import Imageabout from "../../Assets/aboutimage.png";
import { useStyles } from "./style";
const About = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.linkstop}>
        <a href="/">Trending</a>
        <a href="/">Art</a>
        <a href="/">Top</a>
        <a href="/">Music</a>
        <a href="/">Domains</a>
        <a href="/">Trading Cards</a>
        <a href="/">Collect Able</a>
      </div>

      <div className={classes.container}>
        <div className={classes.imagediv}>
          {" "}
          <img
            style={{ width: "400px", height: "400px" }}
            src={Imageabout}
            alt=""
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          <div>
            <h1>
              Artificial Pantings R0034 <br /> by AI
            </h1>
            <span>Description</span>
          </div>
          <div style={{ lineHeight: "1.5em" }}>
            <p>
              Original AI Art Video Interpolation movie by <br /> Artificial
              Paintings AI model. <br /> This video captures the process of
              generating pictures by artificial intelligence. <br /> You will
              own a 100% unique collector’s item that nobody else in the world
              will ever <br />
              have. <br /> The purchase includes: Original MP4 file <br />{" "}
              1024x1024px, which was generated by AI; <br /> Transfer of all
              intellectual rights to <br /> use and distribute the video for any
              purpose. <br /> Limited edition Show less QUANTITY
            </p>
          </div>
          <div className={classes.prices}>
            <h1>PRICE</h1>
            <h1>
              10.33ETH <br />
              $500
            </h1>
          </div>
          <div className={classes.btns}>
            <Button variant="contained" color="primary">
              Place a Bid
            </Button>
            <Button variant="contained" textcolor="primary">
              BUY NOW
            </Button>
          </div>
        </div>
        <div className={classes.line}></div>
      </div>
    </>
  );
};
export default About;
