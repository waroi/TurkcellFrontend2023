import Buttons from "./Buttons";
import { BiChevronRightCircle } from "react-icons/bi";

const BtnView = () => {
  const handleButtonClick = (variation) => {
    console.log(`${variation} button clicked!`);
  };
  return (
    <>
      <div>
        <div>
          <Buttons
            variation="textOnly btnLarge btn1"
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnLarge btn1"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnLarge btnMed btn1"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnLarge btn1"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons
            variation="textOnly btnLarge btn2"
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnLarge btn2"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnLarge btn2"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnLarge btn2"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons
            variation="textOnly btnLarge btn3"
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnLarge btn3"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnLarge btn3"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnLarge btn3"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons
            variation="textOnly btnLarge btn4"
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnLarge btn4"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnLarge btn4"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnLarge btn4"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons
            variation="textOnly btnLarge btn5"
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnLarge btn5"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnLarge btn5"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnLarge btn5"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons
            variation="textOnly btnLarge btn6"
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnLarge btn6"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnLarge btn6"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnLarge btn6"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
      </div>
      <div
        // style={{
        //   marginTop: "20px",
        //   paddingTop: "20px",
        //   borderTop: "1px solid black",
        // }}
        className={"mt-3 pt-3 border-top border-dark"}
      >
        <div>
          <Buttons variation="textOnly btnMed btn1" onClick={handleButtonClick}>
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnMed btn1"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnMed btnMed btn1"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnMed btn1"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons className={"knowledgebtn"} variation="textOnly btnMed btn2" onClick={handleButtonClick}>
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnMed btn2"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnMed btn2"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnMed btn2"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons variation="textOnly btnMed btn3" onClick={handleButtonClick}>
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnMed btn3"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnMed btn3"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnMed btn3"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons variation="textOnly btnMed btn4" onClick={handleButtonClick}>
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnMed btn4"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnMed btn4"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnMed btn4"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons variation="textOnly btnMed btn5" onClick={handleButtonClick}>
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnMed btn5"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnMed btn5"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnMed btn5"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
        <div>
          <Buttons variation="textOnly btnMed btn6" onClick={handleButtonClick}>
            Click here
          </Buttons>
          <Buttons
            variation="textIconRight btnMed btn6"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="textIconLeft btnMed btn6"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          >
            Click here
          </Buttons>
          <Buttons
            variation="iconOnly btnMed btn6"
            icon={<BiChevronRightCircle />}
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default BtnView;
