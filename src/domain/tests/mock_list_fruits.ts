import { ListFruits, ListFruitsModel, ListFruitsParams } from "../usecases/list_fruits";
import { mockFruitModel } from "./mock_fruit_model";

export const mockListFruitParams = (): ListFruitsParams => ({})
export const mockListFruitModel = (): ListFruitsModel => [mockFruitModel(), mockFruitModel(), mockFruitModel()]

export class ListFruitsSpy implements ListFruits {
    fruits = mockListFruitModel();
    params?: ListFruitsParams;
    callsCount = 0;

    async list(params: ListFruitsParams): Promise<ListFruitsModel> {
        this.params = params
        this.callsCount++
        return this.fruits
    }
    
}