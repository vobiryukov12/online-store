import { IProductCart } from "./models/models";

export interface IState {
  count: number,
  products: IProductCart[]
}

export interface IAction {
  type: string,
  payload: number | IProductCart[]
}

export default function reducer(state: IState, action: IAction) {
  switch(action.type) {
    case 'add':
      return typeof action.payload === "number" && { ...state, count: state.count + action.payload };

    case 'remove':
      return typeof action.payload === "number" && { ...state, count: state.count - action.payload };

    case 'removeProducts':
      return { ...state, products: action.payload };
    
    case 'getProducts':
      return { ...state, products: action.payload };

    default:
      return state;
  }
}
