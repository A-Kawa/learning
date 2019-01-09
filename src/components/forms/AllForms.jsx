import React from "react";
import { ListOfItems } from "./subForms/ListofItems";
import "../../styles/AllForms.scss";
import { AddNewForm } from "./subForms/AddNewForm";

export const AllForms = () => {
  return (
    <div className="AllForms">
      <AddNewForm />
      <ListOfItems />
    </div>
  );
};
