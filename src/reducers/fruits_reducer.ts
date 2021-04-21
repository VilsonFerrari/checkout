import { createSlice } from "@reduxjs/toolkit";
import { FruitModel } from "../domain/models";
import { CalculateCheckoutParams } from "../domain/usecases/calculate_checkout";

type FruitsState = {
    fruits: FruitModel[]
    basket: CalculateCheckoutParams
    total?: number
}

const initialState = {
    fruits: [],
    basket: { fruits: [] },
}

const fruitsReducer = createSlice({
    name: 'fruits',
    initialState,
    reducers: {
        add_fruit: (state: FruitsState, action) => {
            const payload: FruitModel = action.payload
            const exists = state.basket.fruits.findIndex(
                (el) => el.fruit.name === payload.name
            ) ?? -1

            if(exists >= 0) {
                state.basket.fruits[exists].amount += 1
            } else {
                state.basket.fruits.push({
                    fruit: payload,
                    amount: 1
                })
            }
        },
        remove_fruit: (state: FruitsState, action) => {
            const payload: FruitModel = action.payload
            const exists = state.basket.fruits.findIndex(
                (el) => el.fruit.name === payload.name
            ) ?? -1

            if(exists >= 0) {
                let newAmount = state.basket.fruits[exists].amount - 1
                if(newAmount < 0) {
                    newAmount = 0
                }

                state.basket.fruits[exists].amount = newAmount
            }
        },
        update_fruits: (state: FruitsState, action) => {
            state.fruits = action.payload
        },
        calculate: (state: FruitsState, action) => {
            state.total = action.payload
        }
    }
})

export default fruitsReducer