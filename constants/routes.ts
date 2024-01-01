const options = {
   headers: {
      "Content-Type": "application/json",
   },
   withCredentials: true,
};

export const routes = {
   locale: {
      baseURL: "http://localhost:3000/api",
      ...options,
   },
   remote: {
      baseURL: "",
      ...options,
   },
};
