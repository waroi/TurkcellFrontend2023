import { WhatsNewTitle } from "./HomeStyle";
import Button from "../Button/Button";
import chevronRight from "../../img/chevron-right.png";
import { WhatsNewCard } from "./HomeStyle";
import beach from "../../img/beach.jpg";
import models from "../../img/models.jpg";
import sitmodel from "../../img/sitmodel.jpg";
import { CardContent } from "./HomeStyle";

const HomeKnowledge = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <WhatsNewTitle>
            <div className="whatsNew-1">You already know?</div>
            <div className="whatsNew-2">Useful Shirts Knowledge</div>
          </WhatsNewTitle>
          <div className="d-none d-md-block">
            <Button
              color={"#003459"}
              title="View More"
              logo={chevronRight}
              border="1.6px solid #003459"
              background={"transparent"}
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6 ">
              <WhatsNewCard className="w-100">
                <div
                  style={{ height: "250px" }}
                  className="d-flex justify-content-center infoSection"
                >
                  <img className="img-fluid  rounded-2 " src={models} alt="" />
                </div>

                <CardContent className="d-flex flex-column w-100">
                  <span className="knowledgeBadge mt-1">Some Knowledge</span>
                  <div className="d-flex flex-column gap-2">
                    <div className="knowledgeTitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, accusamus?
                    </div>
                    <div className="knowledgeContent">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem in illo quas consequuntur officia expedita dicta
                      eum explicabo quae aliquam.
                    </div>
                  </div>
                </CardContent>
              </WhatsNewCard>
            </div>
            <div className="col-12 col-lg-4 col-md-6 ">
              <WhatsNewCard className="w-100">
                <div
                  style={{ height: "250px" }}
                  className="d-flex justify-content-center infoSection"
                >
                  <img
                    className="img-fluid  rounded-2 "
                    src={sitmodel}
                    alt=""
                  />
                </div>

                <CardContent className="d-flex flex-column w-100">
                  <span className="knowledgeBadge mt-1">Some Knowledge</span>
                  <div className="d-flex flex-column gap-2">
                    <div className="knowledgeTitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, accusamus?
                    </div>
                    <div className="knowledgeContent">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem in illo quas consequuntur officia expedita dicta
                      eum explicabo quae aliquam.
                    </div>
                  </div>
                </CardContent>
              </WhatsNewCard>
            </div>
            <div className="col-12 col-lg-4 col-md-6 ">
              <WhatsNewCard className="w-100">
                <div
                  style={{ height: "250px" }}
                  className="d-flex justify-content-center infoSection"
                >
                  <img className="img-fluid  rounded-2 " src={beach} alt="" />
                </div>

                <CardContent className="d-flex flex-column w-100">
                  <span className="knowledgeBadge mt-1">Some Knowledge</span>
                  <div className="d-flex flex-column gap-2">
                    <div className="knowledgeTitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, accusamus?
                    </div>
                    <div className="knowledgeContent">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem in illo quas consequuntur officia expedita dicta
                      eum explicabo quae aliquam.
                    </div>
                  </div>
                </CardContent>
              </WhatsNewCard>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none  ">
          <Button
            color={"#003459"}
            title="View More"
            logo={chevronRight}
            border="1.6px solid #003459"
            background={"transparent"}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeKnowledge;
