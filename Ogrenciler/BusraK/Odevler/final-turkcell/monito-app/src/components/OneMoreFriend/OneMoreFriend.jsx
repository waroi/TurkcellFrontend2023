import React from "react";
import {
  OneMoreFriendContainer,
  OneMoreLeft,
  OneMoreRight,
  Rectangle9,
  Rectangle1,
} from "./OneMoreFriend.style";
import StButton from "../Button/Button";
const OneMoreFriend = () => {
  return (
    <div className="container">
      <OneMoreFriendContainer>
        <OneMoreLeft>
          <Rectangle1>
            <img src="../../src/assets/OneMoreFriend/Rectangle1-one.png" />
          </Rectangle1>
          <img src="../../src/assets/OneMoreFriend/women-cat.png" />
        </OneMoreLeft>
        <OneMoreRight>
          <Rectangle9>
            <img src="../../src/assets/OneMoreFriend/Rectangle9-one.png" />
          </Rectangle9>
          <div className="OneText">
            <h1>One more friend</h1>
            <h2>Thousands More Fun!</h2>
            <h3>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </h3>
            <div className="d-flex   mt-3 gap-3 buttons ">
              <StButton
                text="View Intro"
                type="no-color-icon"
                image={"../../src/assets/Icon/Play_Circle_dark.png"}
              />
              <StButton text="Explore Now" type="dark-blue" />
            </div>
          </div>
        </OneMoreRight>
      </OneMoreFriendContainer>
    </div>
  );
};

export default OneMoreFriend;
