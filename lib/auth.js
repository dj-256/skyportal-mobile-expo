import axios from "axios";

export const checkToken = (token, instance) => {
  return axios
    .get(`${instance.url}/api/internal/profile`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => {
      return response.data.data;
    });
};
