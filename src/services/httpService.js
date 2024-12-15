import axios from "axios";

///const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://freelancerbackend-7jg0.onrender.com";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, /// if true, all cookies including (so access and refresh tokens are sent to backend)   
}); 

/// to check all errors and successful data in request and response.
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err) /// these are errors related to user like internet problem
);

/// these errors are related to program and should be handle by developers
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    /// all errors regarding response are shown in err.config
    /// so we save all errors in a const
    const originalConfig = err.config;

    if (err.response.status === 401 && !originalConfig._retry) {
      /// 401 error is related to expiration of access token
      originalConfig._retry = true;
      try {
        /// because there is refresh token but does not have access time, so get new access and refresh tokens
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        /// after getting new tokens, it is neccessary to continue the request user sent before 401 error
        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
