export enum ActionType {
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
}

type Action =
  | {type: ActionType.FETCH_START}
  | {type: ActionType.FETCH_SUCCESS; data: string};

type State = {
  loading: boolean;
  data: string;
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'FETCH_START':
      return {state, data: '', loading: true};
    case 'FETCH_SUCCESS':
      return {state, loading: false, data: action.data};
    default:
      return state;
  }
}
