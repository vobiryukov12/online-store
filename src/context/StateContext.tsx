import { createContext } from "react";
import { IAction } from "../reducer";
import { IProductCart } from "../models/models";

export interface CtxData {
  state: {
    count: number,
    products: IProductCart[]
  },
  dispatch: React.Dispatch<IAction>
}

export const StateContext = createContext<CtxData>({
  state: {
    count: 0,
    products: []
  },
  dispatch: () => {}
});
