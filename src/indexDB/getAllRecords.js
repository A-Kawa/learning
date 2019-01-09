import { useContext, useEffect } from "react";
import db from "./db";
import { Context } from "../store/context";

export const getAll = () => {
  const context = useContext(Context);

  db.open();
  useEffect(() => {
    db.table("forms")
      .toArray()
      .then(forms => {
        context.getFromDB(forms);
      });
  }, []);
};
