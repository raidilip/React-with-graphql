import axios, { AxiosInstance } from "axios";

const API_PREFIX = "/api/v1";
const LOGIN_URL = `${API_PREFIX}/users/login`;
const SIGNUP_URL = `${API_PREFIX}/users/register`;
const CHAT_URL = `${API_PREFIX}/chat`;

interface LoginProps {
  username: string;
  password: string;
}

interface SignupProps extends LoginProps {
  name: string;
}

interface ChatProps {
  text?: string;
  file?: File;
}

class API {
  request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  }

  async swapi() {
    return this.request.get("https://swapi.dev/api/people/1");
  }

  async login(loginData: LoginProps) {
    const { data } = await this.request.post(LOGIN_URL, loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  }

  async signup(signupData: SignupProps) {
    console.log(process.env.REACT_APP_API_BASE_URL);
    const { data } = await this.request.post(SIGNUP_URL, signupData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data?.token) {
      localStorage.setItem("token", data.token);
    }

    console.log({ data });

    return data;
  }

  async chat(chatData: ChatProps) {
    const { data } = await this.request.post(CHAT_URL, chatData, {
      headers: {
        "Content-Type": chatData.file
          ? "multipart/form-data"
          : "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return data;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new API();
