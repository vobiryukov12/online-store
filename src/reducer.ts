import { IProductCart } from "./models/models";

export interface IState {
  count: number,
  products: IProductCart[]
}

export interface IAction {
  type: string
}

export interface ICountAction extends IAction {
  payload: number
}

export interface IProductsAction extends IAction {
  payload: IProductCart[]
}

function isAddAction(action: IAction): action is ICountAction {
  return action.type === 'add';
}

function isRemoveAction(action: IAction): action is ICountAction {
  return action.type === 'remove';
}

function isRemoveProductsAction(action: IAction): action is IProductsAction {
  return action.type === 'removeProducts';
}

function isGetProductsAction(action: IAction): action is IProductsAction {
  return action.type === 'getProducts';
}

export default function reducer(state: IState, action: IAction) {
  if (isAddAction(action)) {
    return { ...state, count: state.count + action.payload };
  }
  
  if (isRemoveAction(action)) {
    return { ...state, count: state.count - action.payload };
  }

  if (isRemoveProductsAction(action)) {
    return { ...state, products: action.payload };
  }

  if (isGetProductsAction(action)) {
    return { ...state, products: action.payload };
  }

  return state;
}
