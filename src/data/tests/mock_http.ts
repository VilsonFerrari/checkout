import { HttpClient, HttpResponse } from "../protocols/http/http-client";

export class HttpClientSpy<R = any> implements HttpClient<R> {
    response: HttpResponse<R> = {}

    async request(): Promise<HttpResponse<R>> {
        return this.response;
    }

}