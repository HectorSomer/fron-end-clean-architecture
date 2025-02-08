export interface  SellUpdateData {
        type: string,
        id:   number,
        attributes: {
            concept: string,
            date: string,
            total_price: number, 
        }
}