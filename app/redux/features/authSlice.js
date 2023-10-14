import { createSlice } from "@reduxjs/toolkit";
import { string } from "yup";

const initialState = {
  user: null,
  showSignInBox: false,
  showInfoBox: false,
  showMobilNav: false,
  showKickOffBox: false,
  showFundingBox: false,
  projects: [],
  profilPic: !null,
  searchInputVal: "",
  showConfirmationBox: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setShowSignInBox: (state) => {
      state.showSignInBox = !state.showSignInBox;
    },
    setShowInfoBox: (state) => {
      state.showInfoBox = !state.showInfoBox;
    },
    setCloseInfoBox: (state, action) => {
      state.showInfoBox = action.payload
    },
    setShowMobilNav: (state) => {
      state.showMobilNav = !state.showMobilNav;
    },
    setShowKickOffBox: (state) => {
      state.showKickOffBox = !state.showKickOffBox;
    },
    setCloseKickOffBox: (state, action) => {
      state.showKickOffBox = action.payload;
    },
    setCloseMobileNav: (state, action) => {
      state.showMobilNav = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setProfilPic: (state, action) => {
      state.profilPic = action.payload;
    },
    setSearchInputVal: (state, action) => {
      state.searchInputVal = action.payload;
    },
    setShowConfirmationBox: (state) => {
      state.showConfirmationBox = !state.showConfirmationBox;
    },
    setShowFundingBox: (state) => {
      state.showFundingBox = !state.showFundingBox;
    },
    setCloseSignInBox: (state, action) => {
      state.showSignInBox = action.payload
    }
  },
});

export const {
  setShowSignInBox,
  setCloseSignInBox,
  setShowInfoBox,
  setShowMobilNav,
  setUser,
  setShowKickOffBox,
  setCloseMobileNav,
  setProjects,
  setProfilPic,
  setSearchInputVal,
  setShowConfirmationBox,
  setCloseKickOffBox,
  setShowFundingBox,
  setCloseInfoBox
} = authSlice.actions;
export default authSlice.reducer;
