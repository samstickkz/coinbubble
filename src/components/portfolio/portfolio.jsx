import React from "react";
import "./port.css"; // Update the import path if needed
import Portimg from "./../../assets/portimg.png";

function Portfolio() {
  return (
    <section>
      <div className="port">
        <div className="port_left">
          <div>
            <h2>
              Build your portfolio with <br /> crypto
            </h2>
          </div>

          <div className="ptl">
            <div className="ln">
              <div className="lnblue"></div>

              <div className="rightport">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="contb">
                    <h3 className="hport">Trade Your Crypto Securely</h3>
                    <p className="portp">
                      Lorem ipsum dolor sit amet consectetur. At <br /> cursus
                      diam sagittis maecenas. Aliquam <br /> ultricies tristique
                      augue
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="port_right">
          <img
            src={Portimg}
            className="portimg"
            alt="Portfolio Image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

// import React from "react";
// import Port from "./port.css";
// import Portimg from "./../../assets/portimg.png";

// function portfolio() {
//   return (
//     <section>
//       <div className="port">
//         <div className="port_left">
//           <div>
//             <h2>
//               Build your portfolio with <br /> crypto
//             </h2>
//           </div>

//           <div className="ptl">
//             <div className="ln">
//               <div className="lnblue"></div>

//               <div className="rightport">
//                 <div className="contb">
//                   <h3 className="hport">Trade Your Crypto Securely</h3>
//                   <p className="portp">
//                     Lorem ipsum dolor sit amet consectetur. At <br /> cursus
//                     diam sagittis maecenas. Aliquam <br /> ultricies tristique
//                     augue
//                   </p>
//                 </div>
//                 <div className="contb">
//                   <h3 className="hport">Trade Your Crypto Securely</h3>
//                   <p className="portp">
//                     Lorem ipsum dolor sit amet consectetur. At <br /> cursus
//                     diam sagittis maecenas. Aliquam <br /> ultricies tristique
//                     augue
//                   </p>
//                 </div>{" "}
//                 <div className="contb">
//                   <h3 className="hport">Trade Your Crypto Securely</h3>
//                   <p className="portp">
//                     Lorem ipsum dolor sit amet consectetur. At <br /> cursus
//                     diam sagittis maecenas. Aliquam <br /> ultricies tristique
//                     augue
//                   </p>
//                 </div>{" "}
//                 <div className="contb">
//                   <h3 className="hport">Trade Your Crypto Securely</h3>
//                   <p className="portp">
//                     Lorem ipsum dolor sit amet consectetur. At <br /> cursus
//                     diam sagittis maecenas. Aliquam <br /> ultricies tristique
//                     augue
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="port_right">
//           <img src={Portimg} className="portimg" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default portfolio;
