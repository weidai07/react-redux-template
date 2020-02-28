import c from './../constants';


let testObj = {
  name: "Trevor",
  location: "Seattle",
  issue: "Career Services",
  id: "1"
}

export default (state = {testObj}, action) => {
  console.log("I am ticket-list-reducer" + state.testObj.name);
  return state;
}

// export default (state = {}, action) => {
//   let newState;
//   const { names, location, issue, id} = action;
//
//   switch (action.type) {
//   case c.ADD_TICKET:
//     newState = Object.assign({}, state, {
//       [id]: {
//         names: names,
//         location: location,
//         issue: issue,
//         id: id
//       }
//     });
//     return newState;
//
//   default:
//     return state;
//   }
// };
