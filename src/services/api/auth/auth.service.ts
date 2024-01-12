import type { AxiosResponse } from "axios";
import {
  ILoginData,
  IRegisterData,
} from "../../../interfaces/auth/auth.interface";
import axios from "../../axios";

class AuthService {
  async signUp(body: IRegisterData): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post("/signup", body);
    return response;
  }

  async signIn(body: ILoginData): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post("/signin", body);
    return response;
  }

  async forgotPassword(email: string): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post(
      "/forgot-password",
      { email }
    );
    return response;
  }

  async resetPassword(
    token: string,
    body: Record<string, string>
  ): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post(
      `/reset-password/${token}`,
      body
    );
    return response;
  }
}

export const authService = new AuthService();
