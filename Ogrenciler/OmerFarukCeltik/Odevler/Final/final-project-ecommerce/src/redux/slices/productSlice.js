import {createSlice} from "@reduxjs/toolkit";
import { deleteProductAdmin,completeBuyFromProductDB, addNewProductAdmin } from "../helpers";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
   search: null,
   buyAlert :"",
  },
  reducers: {
    getProducts: (state,action) => {
      state.products = action.payload;
    },
    deleteCurrProduct: (state,action) => {
      deleteProductAdmin(action.payload);
     state.products.filter((item) => item.id != action.payload.id);
    },
    updateProducts: (state,action) => {
      editProductDataAdmin(action.payload);    
    },
    addProducts:(state,action) => {
      addNewProductAdmin(action.payload);
    },
    handleSearch:(state,action) => {
      state.search = action.payload
    },
    completeBuyProductSide: (state,action) => {
      let basketStatus = "";
      const currData = action.payload;
      currData?.map((item) => state.products.find((data) => {
        if(data.id == item.itemid){
          Number(data.rating.count) < Number(item.count)  ? basketStatus = false : basketStatus = true;  
          if(basketStatus == false){
            state.buyAlert = true; 
         }
          else if(basketStatus == true){
            state.buyAlert = false; 
              data.rating.count = data.rating.count - item.count;
              completeBuyFromProductDB(data);
            } 
          }
        }))
        
    }
  }
})

export const {getProducts,deleteCurrProduct,updateProducts,addProducts,handleSearch,completeBuyProductSide} = productSlice.actions;

export default productSlice.reducer;