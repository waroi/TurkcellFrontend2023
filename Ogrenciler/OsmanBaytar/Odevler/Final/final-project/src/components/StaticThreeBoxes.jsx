import "../styles/StaticThreeBoxes.css";

const StaticThreeBoxes = () => {
  return (
    <div className="container mt-5">
      <div>
        <h5 className="staticThreeBoxes">You alreay know?</h5>
        <h2 className="staticThreeBoxes">Useful Knowledges</h2>
      </div>

      <div className="row">
        <div className="col-lg-4 mt-3">
          <div className="box">
            <img
              className="staticThreeBoxes"
              src="https://img.freepik.com/premium-photo/word-design-written-top-colorful-geometric-3d-shapes_2227-1663.jpg"
            />
            <div className="info">
              <span className="staticThreeBoxes">Cloth Knowledge</span>
              <h4 className="staticThreeBoxes">Knowledge of Design</h4>
              <p className="staticThreeBoxes">
                While talent is not a deciding factor, you do need to make
                things that are aesthetically pleasing; whatever that aesthetic
                may be. So work to polish your skills in this area.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className="box">
            <img
              className="staticThreeBoxes"
              src="https://www.intandemcommunications.co.uk/wp-content/uploads/2019/08/What-is-marketing.jpg"
            />
            <div className="info">
              <span className="staticThreeBoxes">Cloth Knowledge</span>
              <h4 className="staticThreeBoxes">Knowledge of Marketing</h4>
              <p className="staticThreeBoxes">
                There’s the need to remember that marketing is more than just
                social media. Create a plan for how you’re going to spread the
                word other than using Instagram and Facebook.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className="box">
            <img
              className="staticThreeBoxes"
              src="https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg"
            />
            <div className="info">
              <span className="staticThreeBoxes">Cloth Knowledge</span>
              <h4 className="staticThreeBoxes">Knowledge of Finance</h4>
              <p className="staticThreeBoxes">
                There’s the need to understand the money; what’s coming in,
                what’s going out, how to price, how to figure out costing. The
                money situation should not be ignored.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticThreeBoxes;
