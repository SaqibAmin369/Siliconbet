import { useStyles } from "./style";

const Collection = ({ image, category, money, title }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.maincontainer}>
        <img className={classes.Collectionimage} src={image} alt="" />
        <div>
          <p>
            {title} <br /> <span className={classes.span}>{money}</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Collection;
