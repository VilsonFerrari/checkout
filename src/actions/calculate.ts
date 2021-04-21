import { RemoteCalculateCheckout } from "../data/usecaes/calculate_checkout/remote_calculate_checkout"
import { CalculateCheckoutParams } from "../domain/usecases/calculate_checkout"
import fruitsReducer from "../reducers/fruits_reducer"

export const calculate = (params: CalculateCheckoutParams) => async (dispatch: any) => {
    const calc = new RemoteCalculateCheckout()
    dispatch(fruitsReducer.actions.calculate(calc.calculate(params)))
}