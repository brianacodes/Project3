import axios from "axios";

export default {
  // Gets all template messages
  getMessages: function() {
    return axios.get("/api/messages");
  },
  // Post new message
  postMessage: function(message) {
    return axios.post("/api/sendMessage", message);
  }
};
