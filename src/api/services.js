import api from "./api";

export const getAgents = () => {
  return api.get("/agents");
};

export const createAgent = (data) => {
  return api.post("/agents", data);
};
export const getRealEstates = () => {
  return api.get("/real-estates");
};

export const createRealEstate = (data) => {
  return api.post("/real-estates", data);
};

export const getRealEstateDetails = (id) => {
  return api.get(`/real-estates/${id}`);
};

export const deleteRealEstate = (id) => {
  return api.delete(`/real-estates/${id}`);
};

export const getCities = () => {
  return api.get("/cities");
};

export const getRegions = () => {
  return api.get("/regions");
};
