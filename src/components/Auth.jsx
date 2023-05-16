import { useEffect } from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const form = new FormData();
  form.append("client_id", "777493744100016");
  form.append("client_secret", "33a284f5b252e346971ef45a5d58715f");
  form.append("grant_type", "authorization_code");
  form.append("redirect_uri", "http://localhost:3000/");
  form.append("code", { code });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          "https://api.instagram.com/oauth/access_token",
          form,
        );
        console.log("response from api", response);
        return response;
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchUserData().then((res) => {
      console.log("response", res);
    });
  }, [form]);
  return <div>Auth</div>;
};

export default Auth;
