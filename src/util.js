import axios from "axios";

const apiurl = axios.create({
      baseURL: "https://admincs.gauravdesign.com",
//  baseURL: "http://localhost:5000",
  // You can add other default configurations here if needed
});

export default apiurl;
