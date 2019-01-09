import Dexie from "dexie";

const db = new Dexie("FormApp");

db.version(1).stores({
  forms: "++ID, name,parentForm"
});

export default db;
