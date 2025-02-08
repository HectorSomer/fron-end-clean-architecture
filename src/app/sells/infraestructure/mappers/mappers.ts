import { Sell } from "../../domain/entities/sell";
import { SellDeleteData } from "../data/sell-delete-data";
import { GetSellData } from "../data/sell-get-data";
import { SellUpdateData } from "../data/sell-update-data";

export class SellMapper {
  static toSells(responseData: GetSellData[]): Sell[] {
    return responseData.map(item => ({
      sell_id: item.idSell, 
      concept: item.attributes.concept,
      date: item.attributes.concept,
      total_price: item.attributes.total_price,
    }));
  }
  static toOnlyOneSell(responseData: { data: GetSellData }): Sell {
    return {
      sell_id: responseData.data.idSell,
      concept: responseData.data.attributes.concept,
      date: responseData.data.attributes.date,
      total_price: responseData.data.attributes.total_price,
    };
}
  static toBooleanStatus(responseData: SellDeleteData): boolean {
    return responseData.state;
  }
  static updateToSell(responseData: SellUpdateData): Sell{
    return {
      sell_id: responseData.id,
      concept: responseData.attributes.concept,
      date: responseData.attributes.date,
      total_price: responseData.attributes.total_price,
    };
  }
}