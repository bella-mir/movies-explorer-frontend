import React from "react";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { useForm } from "../../../hooks/useForm";

export const Register = ({ handleRegister }) => {
  const controlInput = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = controlInput.values;
    handleRegister(name, email, password);
  };

  return (
    <Form
      greeting={"Добро пожаловать!"}
      submit={"Зарегестрироваться"}
      question={"Уже зарегестрированы?"}
      link={"Войти"}
      href={"/signin"}
      onSubmit={handleSubmit}
    >
      <Input
        label={"Имя"}
        onChange={controlInput.handleChange}
        id="name"
        name="name"
        type="text"
        value={controlInput.values ? controlInput.values.name : ""}
        key={1}
      />
      <Input
        label={"Email"}
        onChange={controlInput.handleChange}
        id="email"
        name="email"
        type="email"
        value={controlInput.values ? controlInput.values.email : ""}
        key={2}
      />
      <Input
        label={"Пароль"}
        onChange={controlInput.handleChange}
        id="password"
        name="password"
        type="password"
        value={controlInput.values ? controlInput.values.password : ""}
        key={3}
      />
    </Form>
  );
};
