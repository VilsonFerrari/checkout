import { CalculateCheckout, CalculateCheckoutModel, CalculateCheckoutParams } from "../usecases/calculate_checkout";
import { mockFruitModel } from "./mock_fruit_model";
import faker from 'faker';
import { mockListFruitModel } from "./mock_list_fruits";

export const mockCalculateCheckoutParams = (): CalculateCheckoutParams => {
    const mockFruits = mockListFruitModel()
    let fruits = []
    for(let fruit of mockFruits) {
        fruits.push({
            fruit: fruit,
            amount: faker.datatype.number(10)
        })
    }

    return { fruits }
}
export const mockCalculateCheckoutModel = (): CalculateCheckoutModel => faker.datatype.number()

export class CalculateCheckoutSpy implements CalculateCheckout {
    result = mockCalculateCheckoutModel();
    params?: CalculateCheckoutParams;
    callsCount = 0;

    calculate(params: CalculateCheckoutParams): CalculateCheckoutModel {
        this.params = params
        this.callsCount++
        return this.result
    }
    
}