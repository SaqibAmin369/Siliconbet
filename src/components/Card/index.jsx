import { useStyles } from "./style";
import { Link } from "react-router-dom";
const Card = ({ img, title, para }) => {
  const classes = useStyles();
  return (
    <>
      <Link to="/about">
        <div className={classes.container}>
          <div className={classes.imgpara}>
            <img className={classes.image} src={img} alt="" />
            <h4 className={classes.title}>
              Flip hoodies <br />
              <span className={classes.spanpara}>Digital Dreams stats</span>
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
