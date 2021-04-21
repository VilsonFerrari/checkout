import { FruitModel } from "../domain/models"
import fruitsReducer from "../reducers/fruits_reducer"

export const addFruit = (fruit: FruitModel) => async (dispatch: any) => {
    dispatch(fruitsReducer.actions.add_fruit(fruit))
}