/**
 * Product examples
 * 
 * {
 *  name: "Bag of Grape",
 *  value: 5,
 *  promotion_type: "another_product"
 * }
 * 
 * {
 *  name: "Apple",
 *  value: 3,
 *  promotion_type: "discount"
 *  promotion_value: 20,
 *  promotion_condition: 2
 * }
 * 
 * {
 *  name: "Peaches",
 *  value: 7
 * }
 */

export enum PromotionTypes {
    ANOTHER_PRODUCT = "another_product",
    DISCOUNT = "discount"
}

export type FruitModel = {
    image: string
    name: string
    value: number
    promotion_type?: PromotionTypes
    promotion_value?: number
    promotion_condition?: number
}