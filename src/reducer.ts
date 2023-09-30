export interface IState {
  count: number;
}

export interface IAction {
  type: string;
  payload: number;
}

export default function reducer(state: IState, action: IAction) {
  switch(action.type) {
    case 'add':
      return { ...state, count: state.count + action.payload };

    case 'remove':
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
}
