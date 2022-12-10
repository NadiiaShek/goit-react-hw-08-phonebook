import { ContactForm } from './../../components/ContactForm/ContactForm';
import { ContactList } from './../../components/ContactList/ContactList';
import { ContactFilter } from './../../components/ContactFilter/ContactFilter';
import { Container, TitlePhoneBook, TitleContacts } from 'components/AppStyled';

export default function Contacts() {
  return (
    <Container>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <ContactFilter />
      <ContactList />
    </Container>
  );
}