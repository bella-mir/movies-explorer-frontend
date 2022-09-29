import React from "react";
import { Form } from "../components/Form";
import { Input } from "../components/Input";

export const Login = () => {
  return (
    <Form
      greeting={"Рады видеть!"}
      submit={"Войти"}
      question={"Еще не зарегестрированы?"}
      link={"Регистрация"}
    >
      <Input label={"Email"} />
      <Input label={"Пароль"} />
    </Form>
  );
};
