import { Button } from "@material-ui/core";

import { useStyles } from "./style";
const LoadMoreSide = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.maincontainer}>
        <div className={classes.container}>
          <div className={classes.border}>
            <h4>
              Pioneering art <br /> market royalties
            </h4>
            <p>
              Artist recives continuous royalities for all <br /> secondary
              sales on their artworks – forever
            </p>
          </div>
          <div className={classes.border}>
            <h4>Built for longevity</h4>
            <p>
              All transaction happen on-chain, creating a <br /> tamper-proof
              record of each artwork's <br /> history
            </p>
          </div>
          <div className={classes.border}>
            <h4>
              The future of Art <br /> collecting
            </h4>
            <p>
              Browse and build your collection of the world’s <br /> most
              cutting-edge digital art
            </p>
          </div>

          <div>
            <Button
              style={{ width: "40%" }}
              variant="contained"
              color="primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoadMoreSide;
