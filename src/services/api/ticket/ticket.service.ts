import { AxiosResponse } from "axios";
import axios from "../../axios";
import {
  ICheckout,
  ITicketData,
} from "../../../interfaces/ticket/ticket.interface";

class TicketService {
  async create(body: ITicketData): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post("/ticket", body);
    return response;
  }

  async getAllTickets(): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(`/tickets`);
    return response;
  }

  async getTicket(ticketId: string | undefined): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.get(
      `/ticket/${ticketId}`
    );
    return response;
  }

  async updateTicket(
    ticketId: string | undefined,
    body: ITicketData
  ): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.put(
      `/ticket/${ticketId}`,
      body
    );
    return response;
  }

  async deleteTicket(ticketId: string | undefined): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.delete(
      `/ticket/${ticketId}`
    );
    return response;
  }

  async checkout(body: ICheckout): Promise<AxiosResponse> {
    const response: Awaited<AxiosResponse> = await axios.post(
      "/checkout",
      body
    );
    return response;
  }
}

export const ticketService = new TicketService();
