import React from "react";
import SkillsIterate from "./skillsiterate";

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
        nameSkills : [{name:"HTML",level:"92%"},
  {name:"CSS",level:"90%"},
  {name:"JAVASCRIPT",level:"70%"},
  {name:"REACT",level:"50%"},
  {name:"ANGULAR",level:"60%"},
  {name:"Bootstrabe",level:"75%"},
  {name:"Nodejs",level:"40%"},
  {name:"Photshop",level:"30%"},
  {name:"Wordpress",level:"20%"},
  {name:"Adope XD",level:"25%"}]
    }
  }

  render() {
      const {nameSkills} = this.state
    return (
      <>
        <div className="row bg-secondary my-5 text-white mx-0">
          <div className="col-12 text-center fs-2 fw-5 my-3">
            <span className="">Skilss</span>
          </div>
          <div className="col-12 my-3">
            <p className="d-flex justify-content-center m-auto w-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur dolorum dicta distinctio, tempora beatae soluta quia
              minima magni architecto est repudiandae, vel fuga dolore doloribus
              cupiditate ipsam, tenetur illum dolores. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Aspernatur dolorum dicta
              distinctio, tempora beatae soluta quia minima magni architecto est
              repudiandae, vel fuga dolore doloribus cupiditate ipsam, tenetur
              illum dolores.
            </p>
          </div>
          <div className="col-5 my-4 me-3 d-flex flex-column align-items-center">
            <p className="mt-3">My Focus</p>
            <p className="w-50 border border-1 border-top-0 border-start-0 border-end-0"></p>
            <p>UI/UX Design</p>
            <p>Responsive Design</p>
            <p>Web Design</p>
            <p>Mopile App Design</p>
          </div>
          <div className="col-5 mb-3">
          <SkillsIterate nameSkillsIterate = {nameSkills} />
          </div>
          
        </div>
      </>
    );
  }
}

export default Skills;
