import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  MainForm,
  AddButton,
  FormLabel,
  Input,
  TitlePhoneBook,
} from 'components/ContactForm/ContactForm.styled';
import { register } from 'redux/authOperations';

const formValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
      <MainForm autoComplete="off">
        <TitlePhoneBook>Register</TitlePhoneBook>
        <FormLabel htmlFor="name">
          Username
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Not may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor="email">
          Email
          <Input type="text" name="email" required />
        </FormLabel>
        <FormLabel htmlFor="password">
          Password
          <Input
            type="password"
            name="password"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Not may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <AddButton type="submit">Register</AddButton>
      </MainForm>
    </Formik>
  );
};
