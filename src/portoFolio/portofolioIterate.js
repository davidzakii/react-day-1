function PortoIterate(props) {
  const { kay } = props;
  console.log(kay)
  return (
    <>
      {kay.map((card,index) => {
        return (
          <div key={index} className="col mb-3">
            <div
              className="card text-white bg-secondary"
              style={{ width: "18rem", height: "200px" }}
            >
              <div className="card-body d-flex align-items-center justify-content-center ">
                <h5 className="card-title">{card.title}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default PortoIterate;
