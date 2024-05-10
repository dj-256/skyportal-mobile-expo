import axios from "axios";

export const checkToken = async (token) => {
  return axios
    .get("https://skyportal-icare.ijclab.in2p3.fr/api/internal/profile", {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => {
      return response.data.data;
    });
};
