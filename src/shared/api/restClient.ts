import axios, { AxiosRequestConfig } from 'axios';

export const controller = new AbortController();

class RestClient {
  static get(props: { endPoint: string; controller: typeof controller }) {
    // return {
    //   method: 'get',
    //   url: props.endPoint,
    //   headers: {
    //     Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
    //     'Sec-Fetch-Mode': 'no-cors',
    //   },
    //   signal: props.controller?.signal,
    // };

    const config: AxiosRequestConfig = {
      method: 'get',
      url: props.endPoint,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
        'Sec-Fetch-Mode': 'no-cors',
      },
      signal: props.controller?.signal,
    };

    return axios(config);
  }

  static post(props: { endPoint: string; entity: any; controller: typeof controller }) {
    // const config: AxiosRequestConfig = {
    //   method: 'post',
    //   url: props.endPoint,
    //   headers: {
    //     Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
    //     'Sec-Fetch-Mode': 'no-cors',
    //   },
    //   data: props.entity,
    //   signal: props.controller?.signal,
    // };
    // return axios(config);

    return {
      method: 'post',
      url: props.endPoint,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
        'Sec-Fetch-Mode': 'no-cors',
      },
      body: props.entity,
      signal: props.controller?.signal,
    };
  }
}

export default RestClient;
