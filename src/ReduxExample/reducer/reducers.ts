export default function (state: any, action: any) {
  switch (action.type) {
    case 'ADD_NAME':
      const newList = [...state.nameList, action.payload.name];
      console.log('new' + newList);
      console.log('name' + state.nameList);
      return {...state, nameList: newList};
    default:
      return state;
  }
}
