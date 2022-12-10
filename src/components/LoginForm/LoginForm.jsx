import { Formik } from 'formik';
import {
  MainForm,
  AddButton,
  FormLabel,
  Input,
  TitlePhoneBook,
} from 'components/ContactForm/ContactForm.styled';
import { logIn } from 'redux/authOperations';
import { useDispatch } from 'react-redux';
const formValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );
    resetForm();
  };

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
      <MainForm autoComplete="off">
        <TitlePhoneBook>Log in</TitlePhoneBook>
        <FormLabel htmlFor="email">
          Email
          <Input type="email" name="email" required />
        </FormLabel>
        <FormLabel htmlFor="password">
          Password
          <Input type="password" name="password" required />
        </FormLabel>
        <AddButton type="submit">Log in</AddButton>
      </MainForm>
    </Formik>
  );
};
