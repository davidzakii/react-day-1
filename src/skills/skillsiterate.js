function SkillsIterate(props) {
  const { nameSkillsIterate } = props;
  console.log(nameSkillsIterate);
  return (
    <>
      {nameSkillsIterate.map((skill,index) => {
        return (
          <div key={index} className="">
            {skill.name}
            <div className="progress my-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{width: skill.level}}
              aria-valuenow= {skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.level}
            </div>
            </div>

          </div>
        );
      })}
    </>
  );
}

export default SkillsIterate;

{
  /* <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div> */
}
