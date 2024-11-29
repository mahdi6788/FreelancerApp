import http from "./httpService";

/// all functions related to authentication

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data); /// note 13
}
export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data); /// note 13
}
export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}
export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
export function LogoutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

export function getUsersApi() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export function changeUserStatusApi({ userId, data }) {
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}

// getOtp(), checkOtp() and completeProfile() use post to send data to backend (phoneNumber, OTP and userInfo respectively)
// and then get response from backend using .then().
// but in the getUser(), get data from backend directly at first.
