import { createContext } from "react";
import { IAction } from "../reducer";

export interface CtxData {
  state: {
    count: number
  },
  dispatch: React.Dispatch<IAction>
}

export const StateContext = createContext<CtxData>({
  state: {
    count: 0
  },
  dispatch: () => {}
});
