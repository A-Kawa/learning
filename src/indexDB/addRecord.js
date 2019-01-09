import db from "./db";

export const Add = data => {
  db.table("forms").add(data);
};
