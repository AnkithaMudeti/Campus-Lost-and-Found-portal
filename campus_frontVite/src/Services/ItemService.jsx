import axios from "axios";
axios.defaults.withCredentials = true;
const BASE_URL = "http://localhost:9999/lost-found";
const ITEM_URL = "http://localhost:9999/lost-found/item";
const ITEMID_URL = "http://localhost:9999/lost-found/id-gen";
const LOST_URL = "http://localhost:9999/lost-found/not-found";
const FOUND_URL = "http://localhost:9999/lost-found/found";

export const getAllItems = () => {
  return axios.get(ITEM_URL);
};

export const lostItemSubmission = (lostItem) => {
  return axios.post(ITEM_URL, lostItem);
};

export const foundItemSubmission = (lostItem) => {
  return axios.put(ITEM_URL, lostItem);
};

export const getItemById = (id) => {
  return axios.get(ITEM_URL + "/" + id);
};

export const deleteItemById = (id) => {
  return axios.delete(ITEM_URL + "/" + id);
};

export const itemIdGenerator = () => {
  return axios.get(ITEMID_URL);
};

export const notFoundItemList = () => {
  return axios.get(LOST_URL);
};

export const foundItemList = () => {
  return axios.get(FOUND_URL);
};

export const lostItemListByUser = () => axios.get(`${BASE_URL}/lost`);
export const foundItemListByUser = () => axios.get(`${BASE_URL}/lostfound`);

// Mark an existing item as found by updating its foundDate
export const markItemAsFound = async (itemId, foundDate) => {
  // Fetch existing item to avoid overwriting other fields with nulls
  const existing = await axios.get(`${ITEM_URL}/${itemId}`);
  const updated = { ...existing.data, foundDate };
  return axios.put(ITEM_URL, updated);
};

// Students
export const getAllStudents = () => axios.get(`${BASE_URL}/student`);