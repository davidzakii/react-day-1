import React from "react";
import HonorCv from "./herocvowner";
import img from "../assets/images.jpg"


class HeroCv extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "david",
      title: "Wep Developer & Design",
      imageItem: img,
    };
  }

  changeName = () => {
    this.setState({
      name: "tony",
    });
  };

  render() {
    const { name, title, imageItem } = this.state;
    return (
      <>
        <div className="card bg-dark text-white" id="card1">
          <HonorCv honorCvName={name} JobTitle={title} image={imageItem} />
        </div>
      </>
    );
  }
}

export default HeroCv;
