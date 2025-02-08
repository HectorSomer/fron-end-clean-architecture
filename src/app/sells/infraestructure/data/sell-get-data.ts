export interface GetSellData {
    type: string
    idSell:  number,
    attributes: {
              concept:  string,
              date: string,
              total_price: number,
    }
}