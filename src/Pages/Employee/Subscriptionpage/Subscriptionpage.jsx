//SCSS
import "./Subscriptionpage.scss";

//Images
import coinsimage from "../../../Assets/coins.png";
import gimage from "../../../Assets/guarantee.png";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

//MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// react icon plus symbol
import { BiPlusCircle } from 'react-icons/bi'

function createData(Date: String, Price: Number, Coins: Number) {
  return { Date, Price, Coins };
}
const rows = [
  createData("30-12-2022", 12536, 25),
  createData("31/12/2022", 25692, 45),
  createData("30/12/2022", 12536, 25),
  createData("31/12/2022", 25692, 45),
  createData("30/12/2022", 12536, 25),
  createData("31/12/2022", 25692, 45),
];
const Subscriptionpage = () => {
  return (
    <>
      <div className="wallet-alignments">
        <div className="wallet-top">
          <Navbar index="4" />
        </div>
        <div className="wallet-middle">
          <div className="subscription-container">
            <div className="wallet">
              <h2 className="wallet-heading">Wallet</h2>
            </div>
            <div className="coins-table-container">
              <div className="coins-container-main">
                <div>
                  <h1 className="your-coins">Your Coins</h1>
                </div>
                <div className="coins-container">
                  <div className="Coins-button">
                    <h2 className="wallet-price">5,000</h2>
                    <div>
                      <img
                        src={coinsimage}
                        className="coins-image"
                        alt="nocoinsimage"
                      />
                    </div>
                  </div>
                </div>
                <div className="Add-coins">
                  <button className="add-coins-button"> <span> Add Coins <BiPlusCircle size={25} /></span></button>
                </div>
              </div>
              <div className="table-container">
                <h2 className="transactions">Transactions</h2>
                <div className="Transactions-content">
                  <TableContainer
                    component={Paper}
                    sx={{
                      height: "268px",
                      "&::-webkit-scrollbar": { width: "20px" },
                      boxShadow: "none",
                    }}
                  >
                    <Table
                      sx={{ maxWidth: "700px", margin: "10px" }}
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell align="right" className="date">Date&nbsp;(coins)</TableCell>
                          <TableCell align="right" className="price">
                            Price&nbsp;(coins)
                          </TableCell>
                          <TableCell align="right" className="coins">
                            Coins&nbsp;(coins)
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="right" className="rowdate">{row.Date}</TableCell>
                            <TableCell align="right" className="rowprice">{row.Price}</TableCell>
                            <TableCell align="right" className="rowcoins">{row.Coins}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
            <div className="offer-pack-container">
              <div className="first-type-container">
                <div>
                  <button className="starter-pack">STARTER PACK OFFER</button>
                  <button className="offer-pack">20% OFF</button>
                </div>
                <div className="coins-amount-button-container">
                  <div className="coins-amount">
                    <div>
                      <div>
                        <h2>Coins</h2>
                      </div>
                      <div>
                        <p>600 </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h2>Amount</h2>
                      </div>
                      <div>
                        <p>Rs.3000 </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button className="add-coins-button-autopay">
                        Add Coins
                      </button>
                    </div>
                    <div className="checkbox-content">
                      <div>
                        <input type="checkbox" for="checkid1" />
                      </div>
                      <div>
                        <label id="checkid1">
                          {" "}
                          <h3>Auto Pay</h3>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="first-type-container">
                <div>
                  <button className="starter-pack1">
                    INTERMEDIATE PACK OFFER
                  </button>
                  <button className="offer-pack1">10% OFF</button>
                </div>
                <div className="coins-amount-button-container">
                  <div className="coins-amount">
                    <div>
                      <div>
                        <h2>Coins</h2>
                      </div>
                      <div>
                        <p>600 </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h2>Amount</h2>
                      </div>
                      <div>
                        <p>Rs. 3000 </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button className="add-coins-button-autopay">
                        Add Coins
                      </button>
                    </div>
                    <div className="checkbox-content">
                      <div>
                        <input type="checkbox" for="checkid2" />
                      </div>
                      <div>
                        <label id="checkid2">
                          {" "}
                          <h3>Auto Pay</h3>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="first-type-container">
                <div>
                  <button className="starter-pack2">XXXX PACK OFFER</button>
                  <button className="offer-pack2">8% OFF</button>
                </div>
                <div className="coins-amount-button-container">
                  <div className="coins-amount">
                    <div>
                      <div>
                        <h2>Coins</h2>
                      </div>
                      <div>
                        <p>600 </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h2>Amount</h2>
                      </div>
                      <div>
                        <p>Rs. 3000 </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button className="add-coins-button-autopay">
                        Add Coins
                      </button>
                    </div>
                    <div className="checkbox-content">
                      <div>
                        <input type="checkbox" for="checkid3" />
                      </div>
                      <div>
                        <label id="checkid3">
                          {" "}
                          <h3>Auto Pay</h3>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
              </div>
              <div className="bottom-container">
                <div>
                  <img src={gimage} alt="noguarnteeimage" />
                </div>
                <div className="gimage-container">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wallet-bottom">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Subscriptionpage;
