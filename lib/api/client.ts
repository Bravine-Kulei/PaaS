/**
 * API client utilities
 */

import { API_ENDPOINTS } from "./endpoints";

interface RequestOptions extends RequestInit {
  requiresAuth?: boolean;
}

class ApiClient {
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || "";
  }

  private async fetchWithAuth(url: string, options: RequestOptions = {}) {
    // TODO: Add authentication token to headers
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    return fetch(url, {
      ...options,
      headers,
    });
  }

  async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const response = await this.fetchWithAuth(endpoint, {
      ...options,
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async post<T>(
    endpoint: string,
    data: any,
    options: RequestOptions = {}
  ): Promise<T> {
    const response = await this.fetchWithAuth(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async put<T>(
    endpoint: string,
    data: any,
    options: RequestOptions = {}
  ): Promise<T> {
    const response = await this.fetchWithAuth(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async delete<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const response = await this.fetchWithAuth(endpoint, {
      ...options,
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }
}

export const apiClient = new ApiClient();
export { API_ENDPOINTS };

