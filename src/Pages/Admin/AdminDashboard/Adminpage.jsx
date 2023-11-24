// import React, { useState } from "react";
// import "./Adminpage.scss";
// import icon1 from "../../../Assets/icon-1.png";
// import icon2 from "../../../Assets/icon-2.png";
// import icon3 from "../../../Assets/icon-3.png";
// import icon4 from "../../../Assets/icon-4.png";
// import rechargeimage from "../../../Assets/recharge.png";
// import dollar from "../../../Assets/dollar.png";
// import Employeegraph from "./Employeegraph";
// import Employergraph from "./Employergraph";
// import Adminsidebar from "../components/Adminsidebar/Adminsidebar";
// const Adminpage = () => {
//   const datas = [
//     {
//       id: "1",
//       total_employers: 312,
//       total_employees: 912,
//       verified_employers: 600,
//       wallet: 500,
//     },
//   ];
//   const employerssaledata = [
//     {
//       id: "2",
//       sales: "2382",
//       money: "1,00,000",
//     },
//   ];
//   const [data, setData] = useState( datas );
//   const [emplyrsdata, setEmplyrsdata] = useState( employerssaledata );
//   return (
//     <div className="admincontainer_app">
//         <Adminsidebar/>
    
//     <div className="dashboard-main-container">
   
//       <div className="dashboard-container">
//         <div className="adminheadingbar">
//           <h3>Over View</h3>
//         </div>
//         <div className="card-containers">
//           <div className="card-conatiner-size">
//             <div>
//               <h2>Total Number Of Employers</h2>
//             </div>
//             <div className="image-count-container">
//               <div>
//                 <img src={icon1} alt="noimage" className="imagesize" />
//               </div>
//               <div></div>
//               {data.map( ( item, index ) => {
//                 return (
//                   <div className="num" key={index}>
//                     <h2>{item.total_employers}</h2>
//                   </div>
//                 );
//               } )}
//             </div>
//           </div>
//           <div className="card-conatiner-size">
//             <div>
//               <h2>Total Number Of Employees</h2>
//             </div>
//             <div className="image-count-container">
//               <div>
//                 <img src={icon2} alt="noimage" className="imagesize" />
//               </div>
//               <div>
//                 {data.map( ( item, index ) => {
//                   return (
//                     <div className="num" key={index}>
//                       <h2>{item.total_employees}</h2>
//                     </div>
//                   );
//                 } )}
//               </div>
//             </div>
//           </div>
//           <div className="card-conatiner-size">
//             <div>
//               <h2>Verified Employee's</h2>
//             </div>
//             <div className="image-count-container">
//               <div>
//                 <img src={icon3} alt="noimage" className="imagesize" />
//               </div>
//               <div>
//                 {data.map( ( item, index ) => {
//                   return (
//                     <div className="num" key={index}>
//                       <h2>{item.verified_employers}</h2>
//                     </div>
//                   );
//                 } )}
//               </div>
//             </div>
//           </div>
//           <div className="card-conatiner-size">
//             <div>
//               <h2>Wallet</h2>
//             </div>
//             <div className="image-count-container">
//               <div>
//                 <img src={icon4} alt="noimage" className="imagesize" />
//               </div>
//               <div>
//                 {data.map( ( item, index ) => {
//                   return (
//                     <div className="num" key={index}>
//                       <h2>{item.wallet}</h2>
//                     </div>
//                   );
//                 } )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="sales-cards">
//           <div className="employers-sale">
//             <div className="container-names">
//               <h2>Employer's Sale</h2>
//               <hr />
//             </div>
//             {/* employers and sales container */}
//             <div className="sales-money-container">
//               <div className="image_icon_sales">
//                 <div>
//                   {" "}
//                   <img
//                     src={rechargeimage}
//                     alt="rechargeimage"
//                     className="small_logo"
//                   />
//                 </div>
//                 <div>
//                   {" "}
//                   {emplyrsdata.map( ( item, index ) => {
//                     return (
//                       <div className="nums" key={index}>
//                         <div>
//                           <h2>{item.sales} </h2>
//                         </div>
//                         <div>
//                           <h3>sales</h3>
//                         </div>
//                       </div>
//                     );
//                   } )}
//                 </div>
//               </div>
//               <div className="image_icon_sales">
//                 <div>
//                   {" "}
//                   <img
//                     src={dollar}
//                     alt="rechargeimage"
//                     className="small_logo"
//                   />
//                 </div>
//                 <div>
//                   {" "}
//                   {emplyrsdata.map( ( item, index ) => {
//                     return (
//                       <div className="nums" key={index}>
//                         <div>
//                           <h2>{item.money} </h2>
//                         </div>
//                         <div>
//                           <h3>Money</h3>
//                         </div>
//                       </div>
//                     );
//                   } )}
//                 </div>
//               </div>
//             </div>
//             <div className="chart-size">
//               <Employergraph />
//             </div>
//           </div>

//           {/* employyee-cards */}
//           <div className="employees-sale">
//             <div className="container-names">
//               <h2>Employee's Sale</h2>
//               <hr />
//             </div>

//             {/* employers and sales container */}
//             <div className="sales-money-container">
//               <div className="image_icon_sales">
//                 <div>
//                   {" "}
//                   <img
//                     src={rechargeimage}
//                     alt="rechargeimage"
//                     className="small_logo"
//                   />
//                 </div>
//                 <div>
//                   {emplyrsdata.map( ( item, index ) => {
//                     return (
//                       <div className="nums" key={index}>
//                         <div>
//                           <h2>{item.sales} </h2>
//                         </div>
//                         <div>
//                           <h3>sales</h3>
//                         </div>
//                       </div>
//                     );
//                   } )}
//                 </div>
//               </div>
//               <div className="image_icon_sales">
//                 <div>
//                   {" "}
//                   <img
//                     src={dollar}
//                     alt="rechargeimage"
//                     className="small_logo"
//                   />
//                 </div>
//                 <div>
//                   {" "}
//                   {emplyrsdata.map( ( item, index ) => {
//                     return (
//                       <div className="nums" key={index}>
//                         <div>
//                           <h2>{item.money} </h2>
//                         </div>
//                         <div>
//                           <h3>Money</h3>
//                         </div>
//                       </div>
//                     );
//                   } )}
//                 </div>

//               </div>
//             </div>
//             <div className="chart-size">
//               <Employeegraph />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Adminpage;
