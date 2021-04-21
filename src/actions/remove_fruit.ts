import { FruitModel } from "../domain/models"
import fruitsReducer from "../reducers/fruits_reducer"

export const removeFruit = (fruit: FruitModel) => async (dispatch: any) => {
    dispatch(fruitsReducer.actions.remove_fruit(fruit))
}