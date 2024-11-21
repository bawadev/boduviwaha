// apiService.js
import axios from "axios";
import { backEndBaseUrl } from "../store/static-store";

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: backEndBaseUrl,
});

// Add Authorization header to all requests
const setAuthHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// API call to create Buddhist user
export const createBuddhistUser = async (data, token,id) => {
  const response = await api.post(
    `/api/buddhist-users`,
    {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: new Date(data.dateOfBirth).toISOString().split("T")[0],
      gender: data.gender,
      publicImageVisibility: 0.0,
      contacts: [{
        phoneNumber: data.phoneNumber,
        phoneType: "MOBILE"
      }],
      user: {
        id: id
      }
    },
    setAuthHeader(token)
  );
  return response.data;
};

export const updateBuddhistUser = async (userId, data, token,id) => {
  const response = await api.put(
    `/api/buddhist-users/${userId}`,
    {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: new Date(data.dateOfBirth).toISOString().split("T")[0],
      gender: data.gender,
      publicImageVisibility: 0.0,
      contacts: [{
        phoneNumber: data.phoneNumber,
        phoneType: "MOBILE"
      }],
      user: {
        id: id
      }
    },
    setAuthHeader(token)
  );
  return response.data;
};

// API call to create address
export const createAddress = async (data, userId, token) => {
  const response = await api.post(
    `/api/addresses`,
    {
      address: data.address,
      province: data.province,
      district: data.district,
      nearestTown: data.nearestTown,
      user: { userId },
    },
    setAuthHeader(token)
  );
  return response.data;
};

export const updateAddress = async (data, userId, token) => {
  const response = await api.put(
    `/api/addresses/${userId}`,
    {
      address: data.address,
      province: data.province,
      district: data.district,
      nearestTown: data.nearestTown,
      user: { userId },
    },
    setAuthHeader(token)
  );
  return response.data;
};

// API call to create Buddhist practice information
export const createBuddhistPractice = async (data, userId, token) => {
  console.log("Creating Buddhist Practice");
  const response = await api.post(
    `/api/buddhist-practices`,
    {
      origin: data.origin,
      timeInvestedOverall: data.timeInvestedOverall,
      deedCategoryDana: data.deedCategoryDana,
      deedCategorySeela: data.deedCategorySeela,
      deedCategoryBhavana: data.deedCategoryBhavana,
      deedCategoryOther: data.deedCategoryOther,
      meditationAnaPanaSathiTime: parseInt(data.meditationAnaPanaSathiTime),
      meditationMayithreeTime: parseInt(data.meditationMayithreeTime),
      bodyAwarenessTime: parseInt(data.bodyAwarenessTime),
      meditationOtherTime: parseInt(data.meditationOtherTime),
      meditationTeacher: data.meditationTeacher,
      seelaPansilTime: parseInt(data.seelaPansilTime),
      seelaAtaSilTime: parseInt(data.seelaAtaSilTime),
      seelaOtherTime: parseInt(data.seelaOtherTime),
      danaAmountAnimals: parseInt(data.danaAmountAnimals),
      danaAmountPeople: parseInt(data.danaAmountPeople),
      danaAmountSangha: parseInt(data.danaAmountSangha),
      sermonListenTime: parseInt(data.sermonListenTime),
      sermonSpeakersDetails: data.sermonSpeakersDetails,
      knowledgeAbhiDhamma: data.knowledgeAbhiDhamma,
      descriptionOfYourSelf: data.descriptionOfYourSelf,
      enterToHardPractice: data.enterToHardPractice,
      user: { userId },
    },
    setAuthHeader(token)
  );
  return response.data;
};

export const updateBuddhistPractice = async (data, practiceId, token) => {
  console.log("Updating Buddhist Practice");
  const response = await api.put(
    `/api/buddhist-practices/${practiceId}`,
    {
      origin: data.origin,
      timeInvestedOverall: data.timeInvestedOverall,
      deedCategoryDana: data.deedCategoryDana,
      deedCategorySeela: data.deedCategorySeela,
      deedCategoryBhavana: data.deedCategoryBhavana,
      deedCategoryOther: data.deedCategoryOther,
      meditationAnaPanaSathiTime: parseInt(data.meditationAnaPanaSathiTime),
      meditationMayithreeTime: parseInt(data.meditationMayithreeTime),
      bodyAwarenessTime: parseInt(data.bodyAwarenessTime),
      meditationOtherTime: parseInt(data.meditationOtherTime),
      meditationTeacher: data.meditationTeacher,
      seelaPansilTime: parseInt(data.seelaPansilTime),
      seelaAtaSilTime: parseInt(data.seelaAtaSilTime),
      seelaOtherTime: parseInt(data.seelaOtherTime),
      danaAmountAnimals: parseInt(data.danaAmountAnimals),
      danaAmountPeople: parseInt(data.danaAmountPeople),
      danaAmountSangha: parseInt(data.danaAmountSangha),
      sermonListenTime: parseInt(data.sermonListenTime),
      sermonSpeakersDetails: data.sermonSpeakersDetails,
      knowledgeAbhiDhamma: data.knowledgeAbhiDhamma,
      descriptionOfYourSelf: data.descriptionOfYourSelf,
      enterToHardPractice: data.enterToHardPractice,
    },
    setAuthHeader(token)
  );
  return response.data;
};

// API call to create social information
export const createSocialInfo = async (data, userId, token) => {
  const response = await api.post(
    `/api/social-information`,
    {
      marriageStatus: data.marriageStatus,
      occupation: data.occupation,
      highestEducationQualification: data.highestEducationQualification,
      monthlyIncome: data.monthlyIncome,
      houseOwnership: data.houseOwnership,
      vehicleOwnership: data.vehicleOwnership,
      assetsOwnership: data.assetsOwnership,
      createdAt: new Date().toISOString(),
      user: { userId },
    },
    setAuthHeader(token)
  );
  return response.data;
};

export const updateSocialInfo = async (data, socialInfoId, token) => {
  const response = await api.put(
    `/api/social-information/${socialInfoId}`,
    {
      marriageStatus: data.marriageStatus,
      occupation: data.occupation,
      highestEducationQualification: data.highestEducationQualification,
      monthlyIncome: data.monthlyIncome,
      houseOwnership: data.houseOwnership,
      vehicleOwnership: data.vehicleOwnership,
      assetsOwnership: data.assetsOwnership,
      createdAt: new Date().toISOString(),
      
    },
    setAuthHeader(token)
  );
  return response.data;
};

// API call to create health information
export const createHealthInfo = async (data, userId, token) => {
  const response = await api.post(
    `/api/health-information`,
    {
      height: data.height,
      weight: data.weight,
      physicalAttractiveness: data.physicalAttractiveness,
      skinTone: data.skinTone,
      kidsExpectancy: data.kidsExpectancy,
      smoking: data.smoking,
      drugUsage: data.drugUsage,
      healthCondition: data.healthCondition,
      disability: data.disability,
      mentalHealth: data.mentalHealth,
      geneticRisks: data.geneticRisks,
      yourMessage: data.yourMessage,
      createdAt: new Date().toISOString(),
      user: { userId },
    },
    setAuthHeader(token)
  );
  return response.data;
};

export const updateHealthInfo = async (data, userId, token) => {
  const response = await api.put(
    `/api/health-information/${userId}`,
    {
      height: data.height,
      weight: data.weight,
      physicalAttractiveness: data.physicalAttractiveness,
      skinTone: data.skinTone,
      kidsExpectancy: data.kidsExpectancy,
      smoking: data.smoking,
      drugUsage: data.drugUsage,
      healthCondition: data.healthCondition,
      disability: data.disability,
      mentalHealth: data.mentalHealth,
      geneticRisks: data.geneticRisks,
      yourMessage: data.yourMessage,
      createdAt: new Date().toISOString(),
      user: { userId },
    },
    setAuthHeader(token)
  );
  return response.data;
};




export const uploadImage = async (formData, userToken) => {
  const response = await axios.post(`${backEndBaseUrl}/api/user-images`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${userToken}`,
    },
  });
  return response.data;
};

// Function to delete an image
export const deleteImage = async (imageId, userToken) => {
  const response = await axios.delete(`${backEndBaseUrl}/api/user-images/${imageId}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return response.data;
};

export const getUserImagesByUser = async (userId, userToken) => {
  try {
    const response = await axios.get(`${backEndBaseUrl}/api/user-images/user-id/${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user images:', error);
    throw error;
  }
};

export const getUserImageVisibilityByUser = async (userId, userToken) => {
  try {
    const response = await axios.get(`${backEndBaseUrl}/api/user-meta/visibility/${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user images:', error);
    throw error;
  }
};

export const addUpdateUserMeta = async (value, userId, metaId, token) => {
  const response = await api.post(
    `/api/user-meta/${userId}`,
    {
      id: metaId,
      metaKey: "IMAGE_VISIBILITY",
      metaValue: value,
    },
    setAuthHeader(token)
  );
  return response.data;
};

export const addUserFeedBackMessage = async (email, message) => {
  console.log(email);
  console.log(message)
  const response = await api.post(
    `/api/messages/feedback`,
    {
      email,
      message
    }
  );
  return response.data;
};