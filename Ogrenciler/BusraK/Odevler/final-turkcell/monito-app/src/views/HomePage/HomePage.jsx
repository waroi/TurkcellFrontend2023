import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setLoginStatus, setUsername } from "../../redux/slices/mainSlice";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

import WhatsNew from "../../components/WhatsNew/WhatsNew";
import OneMoreFriend from "../../components/OneMoreFriend/OneMoreFriend";
import OurProducts from "../../components/OurProducts/OurProducts";
import PetSellers from "../../components/PetSellers/PetSellers";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();
        const storedUser = users.find((user) => user.isLogin === true);
        console.log(users.imageUrl);
        if (storedUser) {
          dispatch(setLoginStatus(true));
          dispatch(setUsername(storedUser.username));
        }
      } catch (error) {}
    };

    fetchUserData();
  }, [dispatch]);

  return (
    <div style={{ background: "var(--neutral-color-00, #FDFDFD)" }}>
      <HeroBanner />
      <WhatsNew />
      <OneMoreFriend />
      <OurProducts />
      <PetSellers />
    </div>
  );
};

export default HomePage;
