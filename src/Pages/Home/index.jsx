import Card from "../../components/Card";
import LoadMoreSide from "../../components/LoadMore";

import data from "../Home/Data";
import Siliconbet from "../../components/silicontbet";
import { useStyles } from "./style";
import data1 from "./Data2";
import Collection from "../../components/Collection";
import Marketplaces from "../../components/marketplaces";
import NFT from "../../components/NFT";
import Footer from "../../components/Footer";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Siliconbet />
      <LoadMoreSide />

      <div className={classes.main}>
        <h1>Recently Added</h1>

        <div className={classes.cardflex}>
          {data.map(({ img, title, para }) => {
            return (
              <div item>
                <Card img={img} title={title} para={para} />{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ backgroundColor: "#140227", marginTop: "-21px" }}>
        <div className={classes.Collection}>
          {data1.map(({ image, money, title }) => {
            return <Collection image={image} money={money} title={title} />;
          })}
        </div>
      </div>
      <div className={classes.secondmain}>
        <h1 style={{ color: "white" }}>
          Top <span style={{ color: "#6604b9" }}>Nfts</span>
        </h1>

        <div className={classes.SecondCard}>
          {data.map(({ img, title, para }) => {
            return (
              <div item>
                <Card img={img} title={title} para={para} />{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ backgroundColor: "#140227", marginTop: "-21px" }}>
        <div className={classes.Collection}>
          {data1.map(({ image, money, title }) => {
            return <Collection image={image} money={money} title={title} />;
          })}
        </div>
      </div>

      <div className={classes.secondmain}>
        <h1 style={{ color: "white" }}>
          Realted <span style={{ color: "#6604b9" }}>Nfts</span>
        </h1>

        <div className={classes.SecondCard}>
          {data.map(({ img, title, para }) => {
            return (
              <div item>
                <Card img={img} title={title} para={para} />{" "}
              </div>
            );
          })}
        </div>
      </div>
      <Marketplaces />
      <NFT />
      <Footer />
    </>
  );
};
export default Home;
