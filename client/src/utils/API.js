import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/';

export default {
  // Gets all Items
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(itemData) {
    console.log('DATA:' +JSON.stringify(itemData, null, 2));
    let data = JSON.stringify(itemData, null, 2);
    return axios.delete("/api/items/", data);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    console.log("DATA: " +JSON.stringify(itemData, null, 2));
    let data = JSON.stringify(itemData, null, 2);
    return axios.post("/api/items", data, {
                headers: { "Content-Type" : "application/json"}
           });
  }
};