
export interface ProductUpdateData {
    type: string;
    id: number;
    attributes: {
      name: string;
      price: number;
      description: string;
      stock: number;
    };
  }