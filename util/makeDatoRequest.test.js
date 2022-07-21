import makeDatoRequest from "./makeDatoRequest";

describe("unit tests makeDatoRequest", () => {

    it("should make a request to the dato graphql endpoint", async () => {
        // 1. arrange
        const query = "{ allProducts { id } }"

        // 2. act
        const response = await makeDatoRequest(query);
        console.log(response);
    })
})