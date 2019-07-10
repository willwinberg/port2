import React from "react";
import ReactDOM from "react-dom";

import { FaPlus, FaTag } from "react-icons/lib/fa";

class Project extends React.Component {

   handleClick(e) {
      window.location.href = "#portfiolio";
   }

   componentWillMount() {
      document.addEventListener('click', this.handleClick, false);
   }

   componentWillUnmount() {
      document.removeEventListener('click', this.handleClick, false);
   }

   render() {
      return (
         <div>
            <div className="columns portfolio-item">
               <div className="item-wrap">
                  <a href={this.props.route} title="">
                     <img alt="" src={this.props.pic} />
                     <div className="overlay">
                        <div className="portfolio-item-meta">
                           <h5>{this.props.title}</h5>
                           <p>{this.props.description}</p>
                        </div>
                     </div>
                     <div className="link-icon">
                        <FaPlus />
                     </div>
                  </a>
               </div>
            </div>

            <div id={this.props.id} className="popup-modal mfp-hide border">
               <img
                  className="scale-with-grid"
                  src={this.props.modal}
                  alt=""
               />
               <div className="description-box">
                  <h4>{this.props.title}</h4>
                  <p>{this.props.synopsis}</p>
                  <span className="categories">
                     {this.props.tech}<FaTag />
                  </span>
               </div>
               <div className="link-box">
                  <a href={this.props.link}>Demo</a>
                  <a href={this.props.git}>Github</a>
                  <a href="#portfolio" className="popup-modal-dismiss">Close</a>
               </div>
            </div>
         </div>
      );
   }
}

export default Project;