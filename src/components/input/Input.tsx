import React, {
  ChangeEvent,
  FunctionComponent,
  forwardRef,
  useEffect,
  useRef,
  Ref,
} from "react";

import { InputContainer, InputIcon, InputLabel } from "./styles";

export type IProps = {
  type?: "text" | "password";
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  ref?: Ref<any>;
  icon?: React.ReactNode;
  label?: string;
  name?: string;
  value?: any;
  testId?: string;
};

export const Input: FunctionComponent<IProps> = forwardRef(
  (
    { type = "text", onChange, placeholder, icon, label, name, value, testId },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef && value) {
        inputRef.current!.value = value;
      }
    }, [value, inputRef]);

    return (
      <>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <InputContainer ref={ref}>
          <input
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            ref={inputRef}
            data-test={testId}
          />
          {icon && <InputIcon>{icon}</InputIcon>}
        </InputContainer>
      </>
    );
  }
);
