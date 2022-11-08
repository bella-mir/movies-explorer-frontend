import React, { useEffect } from "react";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { useFormWithValidation } from "../../../hooks/useForm";

export const Register = ({ handleRegister, isError, setError }) => {
  const controlInput = useFormWithValidation();

  const { name, email, password } = controlInput.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const { name, email, password } = controlInput.values;
    handleRegister(name, email, password);
    controlInput.resetForm();
  };

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setError(false);
      }, "5000");
    }
  }, [isError]);

  return (
    <Form
      greeting={"Добро пожаловать!"}
      submit={"Зарегистрироваться"}
      question={"Уже зарегистрированы?"}
      link={"Войти"}
      href={"/signin"}
      onSubmit={handleSubmit}
      buttonDisabled={!controlInput.isValid ? true : false}
      error={
        isError
          ? "Не удалось зарегистрировать пользователя. Попробуйте еще раз."
          : ""
      }
    >
      <Input
        label={"Имя"}
        onChange={controlInput.handleChange}
        id="name"
        name="name"
        type="text"
        value={controlInput.values ? controlInput.values.name : ""}
        required={true}
        key={1}
        error={name ? "Имя должно быть от 5 до 40 символов" : ""}
        minLength={5}
        maxLength={40}
      />
      <Input
        label={"Email"}
        onChange={controlInput.handleChange}
        id="email"
        name="email"
        type="email"
        value={controlInput.values ? controlInput.values.email : ""}
        required={true}
        key={2}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        error={email ? "Введите корректный email" : ""}
        minLength={5}
        maxLength={40}
        autoComplete="off"
      />
      <Input
        label={"Пароль"}
        onChange={controlInput.handleChange}
        id="password"
        name="password"
        type="password"
        value={controlInput.values ? controlInput.values.password : ""}
        required={true}
        key={3}
        error={password ? "Пароль не может быть меньше 5 символов" : ""}
        minLength={5}
        maxLength={40}
        autoComplete="off"
      />
    </Form>
  );
};
