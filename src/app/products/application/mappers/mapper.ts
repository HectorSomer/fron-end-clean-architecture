import { Product } from "../../domain/entities/product";
import { ProductDeleteData } from "../../domain/entities/data/product_delete_data";
import { ProductGetData } from "../../domain/entities/data/product_get_data";
import { ProductUpdateData } from "../../domain/entities/data/product_update_data";

export class ProductMapper {
  static toProducts(responseData: ProductGetData[]): Product[] {
    return responseData.map(item => ({
      id: item.idProduct, 
      name: item.attributes.name,
      description: item.attributes.description,
      stock: item.attributes.stock,
      price: item.attributes.price,
    }));
  }
  static toOnlyOneProduct(responseData: ProductGetData): Product {
    return {
      id: responseData.idProduct,
      name: responseData.attributes.name,
      description: responseData.attributes.description,
      stock: responseData.attributes.stock,
      price: responseData.attributes.price,
    };
  }
  static toBooleanStatus(responseData: ProductDeleteData): boolean {
    return responseData.state;
  }
  static updateToProduct(responseData: ProductUpdateData): Product{
    return {
      id: responseData.id,
      name: responseData.attributes.name,
      description: responseData.attributes.description,
      stock: responseData.attributes.stock,
      price: responseData.attributes.price,
    };
  }
}