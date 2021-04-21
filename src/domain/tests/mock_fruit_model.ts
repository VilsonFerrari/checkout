import { FruitModel, PromotionTypes } from "../models";
import faker from 'faker';

export const mockFruitModel = (): FruitModel => ({
    image: faker.random.image(),
    name: faker.random.alpha(),
    value: faker.datatype.number(10),
    promotion_type: faker.random.arrayElement(Object.getOwnPropertyNames(PromotionTypes)) as PromotionTypes,
    promotion_value: faker.datatype.number(100),
    promotion_condition: faker.datatype.number(2)
})