import { FruitModel } from "../models";

export interface CalculateCheckout {
    calculate: (params: CalculateCheckoutParams) => CalculateCheckoutModel
}

export type CalculateCheckoutParams = {
    fruits: {
        fruit: FruitModel,
        amount: number
    }[]
}

export type CalculateCheckoutModel = number