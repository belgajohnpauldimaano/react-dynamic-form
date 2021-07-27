import React, { useEffect } from "react";
import { Row, Col, PageHeader } from "antd";
import { useAppDispatch, useAppSelector } from "hooks";
import { FormProvider, useForm } from "react-hook-form";

import { actions } from "sagas/dynamic-form-api/actions";

import Form from "./form";

const DynamicForm = () => {
  const methods = useForm();
  const dispatch = useAppDispatch();
  const formFields: any[] = useAppSelector(
    (state) => state.dynamicForm.formFields
  );
  const apiResponse: any[] = useAppSelector(
    (state) => state.dynamicForm.apiResponse
  );

  useEffect(() => {
    dispatch({ type: actions.FETCH_DYNAMIC_FORM });
  }, [dispatch]);

  useEffect(() => {
    if (formFields) {
      const formData = formFields.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.fieldName]: curr.value,
        };
      }, {});
      methods.reset(formData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formFields]);

  // const onSubmit

  return (
    <div>
      <FormProvider {...methods}>
        <Row>
          <Col span={12} offset={6}>
            <PageHeader title="Dynamic Form" />
            {formFields.length ? <Form /> : null}
          </Col>
        </Row>
      </FormProvider>
      {apiResponse ? JSON.stringify(apiResponse) : ""}
    </div>
  );
};

export default DynamicForm;
