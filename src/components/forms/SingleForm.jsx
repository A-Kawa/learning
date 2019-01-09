import React, { useContext, useEffect } from "react";
import { Context } from "../../store/context";

export const SingleForm = ({ match }) => {
  const context = useContext(Context);
  console.log(match.params.ID);
  useEffect(() => {
    context.getSingleForm(parseInt(match.params.ID));
  }, []);
  console.log(context.myState);
  return (
    <div>
      <h1>{context.myState.name}</h1>
    </div>
  );
};
