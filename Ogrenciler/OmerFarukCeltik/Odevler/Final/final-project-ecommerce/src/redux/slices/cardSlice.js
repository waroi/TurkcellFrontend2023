import { createSlice } from "@reduxjs/toolkit";
import { completeBuyActions, postProductToCard, refreshProductToCard } from "../helpers";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    getCard: (state, action) => {
      state.items = action.payload;
    },
    completeBuy: (state, action) => {
    completeBuyActions(action.payload);
    },
    
    deleteAllCard: (state, action) => {
    completeBuyActions(action.payload);
   
    },
    
    deleteFromCard: (state, action) => {
      const findedCard = state.items.find(
        (item) => item.id == action.payload.userid
      );
      const findedProduct = findedCard?.usercard.filter(
        (item) => item.itemid != action.payload.itemid
      );
      findedCard.usercard.slice(findedProduct,1);
       refreshProductToCard({
          "id":action.payload.userid,
          "usercard": findedProduct,
        });
    },
    handleCard: (state, action) => {
      const findedCard = state.items.find(
        (item) => item.id == action.payload.userid
      );
      const findedProduct = findedCard?.usercard.find(
        (item) => item.itemid == action.payload.itemid
      );
      if (findedCard?.usercard.length > 0 && findedProduct) {
        action.payload.productCount ? action.payload.count = findedProduct.count + 1 : null;
        action.payload.count >= 1 ? findedProduct.count = action.payload.count : null;
        refreshProductToCard({
          "id": action.payload.userid,
          "usercard": [...findedCard.usercard],
        });
      }else if(findedCard?.usercard.length >= 0 && !findedProduct){
        refreshProductToCard({
          "id":action.payload.userid,
          "usercard":[...findedCard.usercard,{
            "itemid":action.payload.itemid,
            "count":Number(action.payload.count),
            "image": action.payload.image,
            "title": action.payload.title,
            "price": action.payload.price,
          }]
        });
      }else{
        postProductToCard({
          "id":action.payload.userid,
          "usercard":[{
            "itemid":action.payload.itemid,
            "count":Number(action.payload.count),
            "image": action.payload.image,
            "title": action.payload.title,
            "price": action.payload.price,
          }]
        });
      }
    },
  },
});

export const { getCard, completeBuy, handleCard,deleteFromCard,deleteAllCard } =
  cardSlice.actions;

export default cardSlice.reducer;
