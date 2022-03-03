
function HonorCv(props) {
  const { honorCvName, JobTitle, image } = props;
  console.log(props);
  return (
    <>
    <img src={image} height="500px" className="card-img" alt="..." />
      <div className="card-img-overlay  d-flex justify-content-center align-items-center flex-column align-content-around">
        <h3 className="card-title ">{ honorCvName }</h3>
        <p className="card-text">{ JobTitle }</p>
        <a
          href="mailto:davidzaki77@gmail.com"
          className="btn btn-dark btn-outline-light"
          role="button"
        >
          Contact Me
        </a>
      </div>
    </>
  );
}

export default HonorCv;
