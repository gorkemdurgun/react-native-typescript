export default function (state: any, action: any) {
  console.log(action.payload);
  
  switch (action.type) {
    case 'ADD_NAME':
      const newList = [...state.nameList, action.payload.name];
      return {...state, newList: newList};
    default:
      return state;
  }
}
