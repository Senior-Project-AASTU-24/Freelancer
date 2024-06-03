import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleSignUp = () => {
  const responseGoogle = async (response) => {
    const { credential } = response;
    try {
      if (!credential) {
        throw new Error("Google sign in failed: Invalid token");
      }
      const authToken = credential.toString();
      const res = await axios.post(
        "http://localhost:8000/social_auth/google/",
        { auth_token: authToken }
      );
      console.log(res.data.token);
    } catch (error) {
      if (error.response) {
        console.error(
          "Request failed with status code:",
          error.response.status
        );
        console.error("Error data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const onFailureGoogle = (error) => {
    if (error.error === "popup_closed_by_user") {
      console.log("Google sign in canceled by user.");
    } else {
      console.log("Google sign in failed:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="811616439063-dtskl32vubr14hkipt3m9egffqt4u060.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={responseGoogle}
        onError={onFailureGoogle}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignUp;
