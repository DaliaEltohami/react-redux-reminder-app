import { Add_Reminder, Clear_Reminders, Remove_Reminder } from "../types";

export const add_Reminder = (text, date) => {
  const action = {
    type: Add_Reminder,
    text,
    date,
  };
  console.log("Add", action);
  return action;
};

export const remove_Reminder = (id) => {
  const action = {
    type: Remove_Reminder,
    id,
  };
  console.log("Remove", action);
  return action;
};

export const clear_Reminders = () => {
  const action = {
    type: Clear_Reminders,
  };
  console.log("Remove", action);
  return action;
};
