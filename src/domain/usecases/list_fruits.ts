import { FruitModel } from "../models";

export interface ListFruits {
    list: (params: ListFruitsParams) => Promise<ListFruitsModel>
}

export type ListFruitsParams = {}
export type ListFruitsModel = FruitModel[]