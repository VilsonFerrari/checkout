import { PromotionTypes } from "../../../domain/models";
import { CalculateCheckout, CalculateCheckoutParams, CalculateCheckoutModel } from "../../../domain/usecases/calculate_checkout";

export class RemoteCalculateCheckout implements CalculateCheckout {
    calculate(params: CalculateCheckoutParams): CalculateCheckoutModel {
        const { fruits } = params
        let value = 0;

        for(let el of fruits) {
            const { fruit, amount } = el
            if(amount > 0) {
                switch(fruit.promotion_type as unknown as PromotionTypes) {
                    case PromotionTypes.ANOTHER_PRODUCT:
                        let newAmount = Math.ceil(amount / 2)
                        value += fruit.value * newAmount
                        break;
                    case PromotionTypes.DISCOUNT:
                        if(fruit.promotion_condition && fruit.promotion_value && amount >= fruit.promotion_condition) {
                            value += (fruit.value * amount) * (1 - (fruit.promotion_value / 100))
                        } else {
                            value += fruit.value * amount;
                        }
                        break;
                    default:
                        value += fruit.value * amount;
                        break;
                }
            }
        }

        return value
    }
}