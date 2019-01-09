import db from "./db";

export const Delete = id => {
  db.table("forms").delete(parseInt(id));
};
