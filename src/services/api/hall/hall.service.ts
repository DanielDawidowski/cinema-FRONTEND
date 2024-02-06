import { AxiosResponse } from "axios";
import axios from "../../axios";
import { IHall } from "../../../interfaces/hall/hall.interface";

class HallService {
  async create(body: IHall): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post("/hall", body);
    return response;
  }

  async getAllHalls(): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get("/halls");
    return response;
  }

  async getHall(hallId: string): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(`/hall/${hallId}`);
    return response;
  }

  async editHall(hallId: string, body: IHall): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.put(
      `/hall/${hallId}`,
      body
    );
    return response;
  }

  async deleteHall(hallId: string): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.delete(
      `/hall/${hallId}`
    );
    return response;
  }
}

export const hallService = new HallService();
