import React from "react";

import { FaPlus, FaTag } from "react-icons/lib/fa";

const Project = (props) => {
   return (
      <div>
         <div className="columns portfolio-item">
            <div className="item-wrap">
               <a href={props.id} title="">
                  <img alt="" src={props.pic} />
                  <div className="overlay">
                     <div className="portfolio-item-meta">
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>
                     </div>
                  </div>
                  <div className="link-icon">
                     <FaPlus />
                  </div>
               </a>
            </div>
         </div>

         <div id={props.id} className="popup-modal mfp-hide border">
            <img
               className="scale-with-grid"
               src={props.modal}
               alt=""
            />
            <div className="description-box">
               <h4>{props.title}</h4>
               <p>{props.synopsis}</p>
               <span className="categories">
                  {props.tech}<FaTag />
               </span>
            </div>
            <div className="link-box">
               <a href={props.link}>Demo</a>
               <a href={props.git}>Github</a>
               <a href="#portfolio" className="popup-modal-dismiss">Close</a>
            </div>
         </div>
      </div>
   );
};

export default Project;
