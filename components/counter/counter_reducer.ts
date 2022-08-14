export enum ButtonType {
  INCREASE,
  DECREASE,
  RESET,
}

type Action = {
  type: ButtonType.INCREASE | ButtonType.DECREASE | ButtonType.RESET;
  payload?: number | null;
};

type State = {
  count: number;
};

export function counterReducer(state: State, action: Action) {
  switch (action.type) {
    case ButtonType.INCREASE:
      return {state, count: state.count + action.payload!};
    case ButtonType.DECREASE:
      return {state, count: state.count - action.payload!};
    case ButtonType.RESET:
      return {state, count: 0};
    default:
      return state;
  }
}
