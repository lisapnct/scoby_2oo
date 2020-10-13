import React from "react";
import FormItem from "../components/Forms/FormItem";

const EditItem = (props) => {
  return <FormItem action="edit" id={props.match.params.id} />;
};

export default EditItem;
