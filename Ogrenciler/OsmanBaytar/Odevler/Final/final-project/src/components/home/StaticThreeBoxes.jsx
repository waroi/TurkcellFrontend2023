import "../../styles/StaticThreeBoxes.css";

const StaticThreeBoxes = () => {
  return (
    <div className="container mt-3">
      {/* <div>
        <h5 className="staticThreeBoxes">You alreay know?</h5>
        <h2 className="staticThreeBoxes">Useful Pet Knowledge</h2>
      </div> */}

      <div className="row">
        <div className="col-lg-4 mt-3">
          <div className="box">
            <img
              className="staticThreeBoxes"
              src="../../../public/image1.png"
            />
            <div className="info">
              <span className="staticThreeBoxes">Pet Knowledge</span>
              <h4 className="staticThreeBoxes">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </h4>
              <p className="staticThreeBoxes">
                The Pomeranian, also known as the Pomeranian (Pom dog), is
                always in the top of the cutest pets. Not only that, the small,
                lovely, smart, friendly, and skillful circus dog breed.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className="box">
            <img
              className="staticThreeBoxes"
              src="../../../public/image2.png"
            />
            <div className="info">
              <span className="staticThreeBoxes">Pet Knowledge</span>
              <h4 className="staticThreeBoxes">Dog Diet You Need To Know</h4>
              <p className="staticThreeBoxes">
                Dividing a dog's diet may seem simple at first, but there are
                some rules you should know so that your dog can easily absorb
                the nutrients in the diet. For those who are just starting to
                raise dogs, especially newborn puppies with relatively weak
                resistance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className="box">
            <img
              className="staticThreeBoxes"
              src="../../../public/image3.png"
            />
            <div className="info">
              <span className="staticThreeBoxes">Pet Knowledge</span>
              <h4 className="staticThreeBoxes">
                Why Dogs Bite and Destroy Furniture and How to Prevent It
                Effectively
              </h4>
              <p className="staticThreeBoxes">
                Dog bites are common during development. However, no one wants
                to see their furniture or important items being bitten by a dog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticThreeBoxes;
