import React from "react";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { useFormWithValidation } from "../../../hooks/useForm";

export const Login = ({ handleLogin, isError, setError }) => {
  const controlInput = useFormWithValidation();

  const { email, password } = controlInput.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const { email, password } = controlInput.values;
    handleLogin(email, password);
    controlInput.resetForm();
  };

  return (
    <Form
      greeting={"Рады видеть!"}
      submit={"Войти"}
      question={"Еще не зарегистрированы?"}
      link={"Регистрация"}
      href={"/signup"}
      onSubmit={handleSubmit}
      buttonDisabled={!controlInput.isValid ? true : false}
      error={isError ? "Ошибка входа. Попоробуйте еще раз" : ""}
    >
      <Input
        label={"Email"}
        onChange={controlInput.handleChange}
        id="email"
        name="email"
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required={true}
        value={controlInput.values ? controlInput.values.email : ""}
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
        required={true}
        value={controlInput.values ? controlInput.values.password : ""}
        error={password ? "Пароль не может быть меньше 5 символов" : ""}
        minLength={5}
        maxLength={40}
        autoComplete="off"
      />
    </Form>
  );
};
