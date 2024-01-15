import { Add_Reminder, Clear_Reminders, Remove_Reminder } from "../types";
import { bake_cookie, read_cookie } from "sfcookies";

const initState = [];

const reducer = (state = initState, action) => {
  let newState = [];
  state = read_cookie("reminders");
  if (action.type === Add_Reminder) {
    newState = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];
    bake_cookie("reminders", newState);
    console.log("from Reducer", newState);
    return newState;
  } else if (action.type === Remove_Reminder) {
    newState = state.filter((reminder) => reminder.id !== action.id);
    bake_cookie("reminders", newState);
    console.log("from Reducer", newState);
    return newState;
  } else if (action.type === Clear_Reminders) {
    newState = [];
    bake_cookie("reminders", newState);
    return newState;
  }
  return state;
};
export default reducer;
