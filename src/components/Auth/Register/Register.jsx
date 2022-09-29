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
    >
      <Input label={"Имя"} />
      <Input label={"Email"} />
      <Input label={"Пароль"} />
    </Form>
  );
};

// <Section>
//   <div className={styles.body}>
//     <Link to="/">
//       <div className={styles.logo}></div>
//     </Link>
//     <h2 className={styles.greeting}>Добро пожаловать!</h2>
//     <form className={styles.form}>
//       <label className={styles.label}>
//         Имя
//         <input className={styles.input}></input>
//       </label>
//       <label className={styles.label}>
//         E-mail
//         <input className={styles.input}></input>
//       </label>
//       <label className={styles.label}>
//         Пароль
//         <input className={styles.input}></input>
//       </label>
//       <button className={styles.submit}>Зарегестрироваться</button>
//     </form>
//     <div className={styles.info}>
//       <p className={styles.question}>Уже зарегестрированы?</p>
//       <Link className={styles.link} to="/signin">
//         Войти
//       </Link>
//     </div>
//   </div>
// </Section>
//   );
// };
