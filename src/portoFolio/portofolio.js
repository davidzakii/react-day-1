import React from "react";
import PortoIterate from "./portofolioIterate"

class PortoFolio extends React.Component {
  constructor() {
    super();
    this.state = {
  cardList :[{title:"WEB DESIGN",bg:true},{title:"MOPILE DESIGN",bg:false},{title:"LOGO DESIGN",bg:true},{title:"Web APP DEVELOPMENT",bg:false},{title:"PAW DEVELOPMENT",bg:true},{title:"Web APP DEVELOPMENT",bg:false}]
    }
  }

  render() {
      const {cardList} = this.state; 
    return (
      <>
        <div className="row m-0">
          
            <p className="fs-3 fw-3 my-3 text-start" id="shadow">
              PortoFolio
            </p>
          

          <div className="row mx-auto mb-3">
            <PortoIterate kay={cardList}/>
          </div>
        </div>
      </>
    );
  }
}
export default PortoFolio;