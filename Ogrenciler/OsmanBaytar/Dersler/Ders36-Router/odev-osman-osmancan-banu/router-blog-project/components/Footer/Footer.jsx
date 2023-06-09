import { IconList, FooterTitle, FooterList, LinkTag } from "./FooterStyle";

const Footer = () => {
  return (
    <footer style={{ margin: "100px 0 0 0" }}>
      <div style={{ height: "250px" }} className="row text-center ">
        <div
          style={{
            backgroundColor: "#F7E6C4",
            borderRight: "2px solid white",
          }}
          className="col col-md-4 py-3 "
        >
          <FooterTitle>
            <h3>Categories</h3>
          </FooterTitle>
          <FooterList>
            <div className="d-flex justify-content-center gap-4 py-4">
              <div>
                <a href="">
                  <LinkTag>Sports</LinkTag>
                </a>
                <a href="">
                  <LinkTag className="my-2">Magazine</LinkTag>
                </a>
              </div>
              <div>
                <a href="">
                  <LinkTag>Economics</LinkTag>
                </a>
                <a href="">
                  <LinkTag className="my-2">Politics</LinkTag>
                </a>
              </div>
            </div>
          </FooterList>
        </div>
        <div
          style={{ backgroundColor: "#F7E6C4", borderRight: "2px solid white" }}
          className="col col-md-4  py-3 "
        >
          <FooterTitle>
            <h3>Authors</h3>
          </FooterTitle>
          <FooterList>
            <div className="d-flex flex-column gap-2 p-2 align-items-center">
              <a href="">
                <LinkTag>Osman Can Kucuk</LinkTag>
              </a>
              <a href="">
                <LinkTag>Banu Sarcan</LinkTag>
              </a>
              <a href="">
                <LinkTag>Osman Baytar</LinkTag>
              </a>
            </div>
          </FooterList>
        </div>
        <div
          style={{ backgroundColor: "#F7E6C4", borderTopRightRadius: "10px" }}
          className="col col-md-4  py-3"
        >
          <FooterTitle>
            <h3>Links</h3>
          </FooterTitle>
          <FooterList>
            <div className="p-2">
              <IconList>
                <li>
                  <i
                    style={{ color: "#1DA1F2" }}
                    className="fa-brands fa-square-twitter  fa-3x"
                  ></i>
                </li>
                <li>
                  <i
                    style={{ color: "#0C61BF" }}
                    className="fa-brands fa-linkedin fa-3x text-primary "
                  ></i>
                </li>
                <li>
                  <i className="fa-brands fa-square-instagram fa-3x"></i>
                </li>
              </IconList>
            </div>
          </FooterList>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
