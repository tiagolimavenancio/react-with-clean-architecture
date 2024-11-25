import { IHttp, IRequestOption } from "./interfaces/IHttp";

class Http implements IHttp {
  async request(req: IRequestOption): Promise<any> {
    const option: RequestInit = { method: req.method };

    if (req?.headers) option.headers = new Headers(req.headers);
    if (req?.body) option.body = JSON.stringify(req.body);

    return fetch(req.url, option)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
}

export default Http;
