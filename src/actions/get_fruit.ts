import { RemoteListFruits } from "../data/usecaes/list_fruits/remote_list_fruits"
import { HttpClientExample } from "../infra/http/example"
import fruitsReducer from "../reducers/fruits_reducer"

export const getFruits = () => async (dispatch: any) => {
    const httpClient = new HttpClientExample()
    const fruits = new RemoteListFruits(httpClient)
    
    dispatch(fruitsReducer.actions.update_fruits(await fruits.list({})))
}