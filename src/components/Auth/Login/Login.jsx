import React from "react";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { useForm } from "../../../hooks/useForm";

export const Login = ({ handleLogin }) => {
  const controlInput = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = controlInput.values;
    handleLogin(email, password);
  };

  return (
    <Form
      greeting={"Рады видеть!"}
      submit={"Войти"}
      question={"Еще не зарегестрированы?"}
      link={"Регистрация"}
      href={"/signup"}
      onSubmit={handleSubmit}
    >
      <Input
        label={"Email"}
        onChange={controlInput.handleChange}
        id="email"
        name="email"
        type="email"
        value={controlInput.values ? controlInput.values.email : ""}
      />
      <Input
        label={"Пароль"}
        onChange={controlInput.handleChange}
        id="password"
        name="password"
        type="password"
        value={controlInput.values ? controlInput.values.password : ""}
      />
    </Form>
  );
};
