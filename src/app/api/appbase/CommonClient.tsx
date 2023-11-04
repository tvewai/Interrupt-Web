import { CommonRequestData, CommonResponseData, HttpMethods } from "./types";

class CommonClient {
  private send<T>(method: HttpMethods, option?: CommonRequestData): Promise<T> {
    const { url, data, params, headers } = option || {};

    const opt: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    };
    // http 유효성검사 추가 
    return fetch(url ? url : "", opt)
      .then(async (res) => {
        if (res.status === 200) {
          const jsonData: CommonResponseData<T> = await res.json();
          return jsonData;
        } else {
          throw new Error(`Request failed with status ${res.status}`);
        }
      })
      .then((jsonData) => jsonData.data)
      .catch((error) => {
        console.error("Request error:", error);
        throw error;
      });
  }

  get<T>(option?: CommonRequestData): Promise<T> {
    return this.send<T>(HttpMethods.GET, option);
  }

  delete<T>(option?: CommonRequestData): Promise<T> {
    return this.send<T>(HttpMethods.DELETE, option);
  }

  put<T>(option?: CommonRequestData): Promise<T> {
    return this.send<T>(HttpMethods.PUT, option);
  }

  post<T>(option?: CommonRequestData): Promise<T> {
    return this.send<T>(HttpMethods.POST, option);
  }

  patch<T>(option?: CommonRequestData): Promise<T> {
    return this.send<T>(HttpMethods.PATCH, option);
  }
}
export default CommonClient;
