import { HttpClient, HttpResponse } from "../../data/protocols/http/http-client";
import { PromotionTypes } from "../../domain/models";

export class HttpClientExample implements HttpClient {
    async request(): Promise<HttpResponse<any>> {
        // The API request should be here.
        return {
            body: [
                {
                    image: 'https://www.svgrepo.com/show/105458/grapes.svg',
                    name: "Bag of Grape",
                    value: 5,
                    promotion_type: PromotionTypes.ANOTHER_PRODUCT
                },
                {
                    image: 'https://www.svgrepo.com/show/1731/apple.svg',
                    name: "Apple",
                    value: 3,
                    promotion_type: PromotionTypes.DISCOUNT,
                    promotion_value: 20,
                    promotion_condition: 2
                },
                {
                    image: 'https://www.svgrepo.com/show/95686/peach.svg',
                    name: "Peaches",
                    value: 7
                }
            ]
        }
    }
}