export interface HttpClient<R = any> {
    request: () => Promise<HttpResponse<R>>
}

export type HttpResponse<T = any> = {
    body?: T
}