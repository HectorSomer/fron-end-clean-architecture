
export interface ProductGetData {
  type: string;
  idProduct: number;
  attributes: {
    name: string;
    price: number;
    description: string;
    stock: number;
  };
}