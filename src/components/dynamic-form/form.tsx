import React from "react";
import { Row, Button, Divider } from "antd";
import { useFormContext } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "hooks";
import { actions } from "sagas/dynamic-form-api/actions";

import InputField from "./input-field";

const Form = () => {
  const dispatch = useAppDispatch();
  const formFields: any[] = useAppSelector(
    (state) => state.dynamicForm.formFields
  );
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();

  const data = watch();

  const onChange =
    (fieldName: string) =>
    (e: React.ChangeEvent<HTMLInputElement> | string) => {
      if (typeof e === "string") {
        setValue(fieldName, e);
        return;
      }
      setValue(fieldName, e.target.value);
    };

  const handleOnFormSubmit = (data: any) => {
    dispatch({ type: actions.SUBMIT_DYNAMIC_FORM, payload: data });
  };

  return (
    <form onSubmit={handleSubmit(handleOnFormSubmit)}>
      <Row gutter={[8, 24]}>
        {formFields.map((i: any) => {
          return (
            <InputField
              style={{ width: "100%" }}
              key={i.fieldName}
              onChange={onChange(i.fieldName)}
              fieldType={i.type}
              fieldName={i.fieldName}
              fieldValue={data[i.fieldName]}
              {...(i.options && { fieldOptions: i.options })}
              disabled={isSubmitting}
            />
          );
        })}
      </Row>
      <Divider />
      <Button type="primary" disabled={isSubmitting} htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
