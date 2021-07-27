import React from "react";
import { Input, Select, InputNumber, Col } from "antd";

const { TextArea } = Input;

const { Option } = Select;
const FIELD_OPTIONS = {
  TEXT: "text",
  SELECT: "select",
  NUMBER: "number",
  MULTILINE: "multiline",
};

type InputFieldProps = {
  fieldType: string;
  fieldName: string;
  fieldValue: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | string
      | number
  ) => void;
  disabled?: boolean;
  fieldOptions?: string[];
};

const InputField = ({
  fieldType,
  fieldName,
  fieldValue,
  fieldOptions,
  disabled,
  onChange,
}: InputFieldProps) => {
  const renderField = () => {
    const placeholder = fieldName
      .split(/(?=[A-Z])/)
      .map((s) => s.toLowerCase())
      .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");

    if (fieldType === FIELD_OPTIONS.SELECT) {
      return (
        <Select
          style={{ width: "100%", textAlign: "left" }}
          value={fieldValue}
          onChange={onChange}
          disabled={disabled}
        >
          {fieldOptions
            ? fieldOptions.map((option: string) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))
            : null}
        </Select>
      );
    } else if (fieldType === FIELD_OPTIONS.NUMBER) {
      return (
        <InputNumber
          style={{ width: "100%" }}
          placeholder={placeholder}
          min={0}
          value={+fieldValue}
          onChange={onChange}
          disabled={disabled}
        />
      );
    } else if (fieldType === FIELD_OPTIONS.MULTILINE) {
      return (
        <TextArea
          style={{ width: "100%" }}
          placeholder={placeholder}
          value={fieldValue}
          onChange={onChange}
          disabled={disabled}
        />
      );
    }
    return (
      <Input
        placeholder={placeholder}
        value={fieldValue}
        disabled={disabled}
        onChange={onChange}
      />
    );
  };

  return <Col span={24}>{renderField()}</Col>;
};

export default InputField;
