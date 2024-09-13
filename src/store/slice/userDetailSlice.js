import { createSlice } from "@reduxjs/toolkit";

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    authDetails: null,
    userDetails: {
      userId: null,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      contacts: [],
      addresses: [
        {
          addressId: null,
          address: "",
          province: "",
          district: "",
          nearestTown: "",
        },
      ],
      buddhistPractice: {
        practiceId: null,
        origin: "",
        timeInvestedOverall: "",
        deedCategoryDana: "",
        deedCategorySeela: "",
        deedCategoryBhavana: "",
        deedCategoryOther: "",
        meditationAnaPanaSathiTime: 0,
        meditationMayithreeTime: 0,
        bodyAwarenessTime: 0,
        meditationOtherTime: 0,
        meditationTeacher: "",
        seelaPansilTime: 0,
        seelaAtaSilTime: 0,
        seelaOtherTime: 0,
        danaAmountAnimals: 0,
        danaAmountPeople: 0,
        danaAmountSangha: 0,
        sermonListenTime: 0,
        sermonSpeakersDetails: "",
        knowledgeAbhiDhamma: "",
        descriptionOfYourSelf: "",
        enterToHardPractice: "",
        createdAt: "",
        valueScore: null,
      },
      socialInformation: {
        socialInfoId: null,
        marriageStatus: "",
        occupation: "",
        highestEducationQualification: "",
        monthlyIncome: 0,
        houseOwnership: "",
        vehicleOwnership: "",
        createdAt: "",
      },
      userHealthInformation: {
        healthInfoId: null,
        height: 0,
        weight: 0,
        physicalAttractiveness: "",
        skinTone: "",
        kidsExpectancy: 0,
        smoking: "",
        drugUsage: "",
        healthCondition: "",
        disability: "",
        mentalHealth: "",
        geneticRisks: "",
        yourMessage: "",
        createdAt: "",
      },
    },
    token: null,
  },
  reducers: {
    updateAuthDetails: (state, action) => {
      state.authDetails = action.payload.authDetails;
    },
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload.userDetails;
    },
    updateToken: (state, action) => {
      state.token = action.payload.token;
    },
    clearAuthDetails: (state) => {
      state.authDetails = null;
      state.token = null;
    },
  },
});

export const {
  updateUserDetails,
  updateAuthDetails,
  updateToken,
  clearAuthDetails,
} = userDetailSlice.actions;
export default userDetailSlice.reducer;
