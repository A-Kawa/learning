import { mainForm } from "../../const/dataForms";

export const getForm = name => {
  let form = mainForm;
  form.name = name;
  return form;
};
