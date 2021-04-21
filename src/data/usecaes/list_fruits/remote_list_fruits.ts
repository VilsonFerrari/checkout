import { UnexpectedError } from "../../../domain/errors/unexpected_error";
import { ListFruits, ListFruitsModel, ListFruitsParams } from "../../../domain/usecases/list_fruits";
import { HttpClient } from "../../protocols/http/http-client";

export class RemoteListFruits implements ListFruits {
    constructor(
        private readonly httpClient: HttpClient<ListFruitsModel>
    ) {}

    async list(params: ListFruitsParams): Promise<ListFruitsModel> {
        const httpResponse = await this.httpClient.request()

        if(!httpResponse.body) {
            throw new UnexpectedError();
        }

        return httpResponse.body;
    }
}