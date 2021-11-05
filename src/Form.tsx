import React from "react";

interface FormPropsInterface {
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
}

interface InputPropsInterface {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Form: React.FunctionComponent<FormPropsInterface> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export const Input: React.FunctionComponent<InputPropsInterface> = ({ value, onChange }) => {
  return <input type="text" placeholder="Name" value={value} onChange={onChange}></input>;
};
