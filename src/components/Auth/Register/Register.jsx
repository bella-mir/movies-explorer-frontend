import React from "react";
import { Form } from "../components/Form";
import { Input } from "../components/Input";

export const Register = () => {
  return (
    <Form
      greeting={"Добро пожаловать!"}
      submit={"Зарегестрироваться"}
      question={"Уже зарегестрированы?"}
      link={"Войти"}
      href={"/signin"}
    >
      <Input label={"Имя"} />
      <Input label={"Email"} />
      <Input label={"Пароль"} />
    </Form>
  );
};
