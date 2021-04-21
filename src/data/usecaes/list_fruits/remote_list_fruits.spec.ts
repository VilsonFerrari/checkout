import { UnexpectedError } from "../../../domain/errors/unexpected_error";
import { mockListFruitModel, mockListFruitParams } from "../../../domain/tests/mock_list_fruits";
import { ListFruitsModel } from "../../../domain/usecases/list_fruits";
import { HttpClientSpy } from "../../tests/mock_http";
import { RemoteListFruits } from "./remote_list_fruits";

type SutTypes = {
    sut: RemoteListFruits
    httpClientSpy: HttpClientSpy<ListFruitsModel>
}

const makeSut = (): SutTypes => {
    const httpClientSpy = new HttpClientSpy<ListFruitsModel>()
    const sut = new RemoteListFruits(httpClientSpy)

    return {
        sut,
        httpClientSpy
    }
}

describe('remote_list_fruits', () => {
    test('Should throw UnexpectedError', async () => {
        const { sut } = makeSut()
        
        const promise = sut.list(mockListFruitParams());
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })

    test('Should return fruits', async () => {
        const { sut, httpClientSpy } = makeSut()
        const httpResult = mockListFruitModel()
        httpClientSpy.response = {
            body: httpResult
        }


        const promise = await sut.list(mockListFruitParams());
        expect(promise).toEqual(httpResult)
    })
})