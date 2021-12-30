const NFT = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#140227",
          marginTop: "-20px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        <div style={{ color: "white" }}>
          <h3> WHAT IS NFT?</h3>
          <p>
            A non-fungible token (NFT) is a unit of data stored on a digital
            ledger, called a blockchain, that <br /> certi fi es a digital asset
            to be uni q ue and therefore not interchangeable .
          </p>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "blue",
            minHeight: "150px",
            display: "flex",
            justifyContent: "center",
            color: "white",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "70px",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            <li>Google</li>
            <li>CoinBase</li>
            <li>TrustWallet</li>
            <li>
              BLOCK CHAIN <br />
              CAPITAL
            </li>
            <li>FUNDER FUND</li>
            <li>Dapper</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NFT;
