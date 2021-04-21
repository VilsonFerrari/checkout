import { ListFruitsModel } from "../../../domain/usecases/list_fruits";
import { HttpClientExample } from "../../../infra/http/example";
import { RemoteListFruits } from "../list_fruits/remote_list_fruits";
import { RemoteCalculateCheckout } from "./remote_calculate_checkout";

type SutTypes = {
    sut: RemoteListFruits
}

const makeSut = (): SutTypes => {
    const httpClientSpy = new HttpClientExample()
    const sut = new RemoteListFruits(httpClientSpy)

    return {
        sut
    }
}

/**
 * Proposed scenarios
 * 
 * [ ['grapes', 1], ['apples', 0], ['peaches', 1] ] => 12
 * [ ['grapes', 1], ['apples', 1], ['peaches', 1] ] => 15
 * [ ['grapes', 2], ['apples', 2], ['peaches', 1] ] => 16.8
 * [ ['grapes', 3], ['apples', 5], ['peaches', 2] ] => 36
 * [ ['peaches', 7], ['grapes', 7], ['apples', 7] ] => 85.8
 */
describe('remote_calculate_checkout', () => {
    const remoteCalculate = new RemoteCalculateCheckout();
    const { sut } = makeSut()
    let fruits: ListFruitsModel

    beforeAll(async () => {
        fruits = await sut.list({})
    })

    // [ ['grapes', 1], ['apples', 0], ['peaches', 1] ] => 12
    test('Should return 12', async () => {
        let params = [
            { fruit: fruits[0], amount: 1 },
            { fruit: fruits[1], amount: 0 },
            { fruit: fruits[2], amount: 1 }
        ]

        const promise = await remoteCalculate.calculate({
            fruits: params
        });
        expect(promise).toEqual(12)
    })


    // [ ['grapes', 1], ['apples', 1], ['peaches', 1] ] => 15
    test('Should return 15', async () => {
        let params = [
            { fruit: fruits[0], amount: 1 },
            { fruit: fruits[1], amount: 1 },
            { fruit: fruits[2], amount: 1 }
        ]

        const promise = await remoteCalculate.calculate({
            fruits: params
        });
        expect(promise).toEqual(15)
    })

    // [ ['grapes', 2], ['apples', 2], ['peaches', 1] ] => 16.8
    test('Should return 16.8', async () => {
        let params = [
            { fruit: fruits[0], amount: 2 },
            { fruit: fruits[1], amount: 2 },
            { fruit: fruits[2], amount: 1 }
        ]

        const promise = await remoteCalculate.calculate({
            fruits: params
        });
        expect(promise).toEqual(16.8)
    })

    // [ ['grapes', 3], ['apples', 5], ['peaches', 2] ] => 36
    test('Should return 36', async () => {
        let params = [
            { fruit: fruits[0], amount: 3 },
            { fruit: fruits[1], amount: 5 },
            { fruit: fruits[2], amount: 2 }
        ]

        const promise = await remoteCalculate.calculate({
            fruits: params
        });
        expect(promise).toEqual(36)
    })

    // [ ['peaches', 7], ['grapes', 7], ['apples', 7] ] => 85.8
    test('Should return 85.8', async () => {
        let params = [
            { fruit: fruits[0], amount: 7 },
            { fruit: fruits[1], amount: 7 },
            { fruit: fruits[2], amount: 7 }
        ]

        const promise = await remoteCalculate.calculate({
            fruits: params
        });
        expect(promise).toEqual(85.8)
    })
})