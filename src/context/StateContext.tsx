import { createContext } from "react";
import { ICountAction, IProductsAction } from "../reducer";
import { IProductCart } from "../models/models";

export interface CtxData {
  state: {
    count: number,
    products: IProductCart[]
  },
  dispatch: React.Dispatch<IProductsAction | ICountAction>
}

export const StateContext = createContext<CtxData>({
  state: {
    count: 0,
    products: []
  },
  dispatch: () => {}
});
