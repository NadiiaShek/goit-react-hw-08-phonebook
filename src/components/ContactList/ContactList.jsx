import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const filteredList = (contacts, filter) => {
  let filterContactsList = null;
  if (filter === '') {
    filterContactsList = contacts;
    return filterContactsList;
  }
  const normalizedFilter = filter.toLowerCase();
  filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  if (filterContactsList.length < 1) {
    window.alert('No matches =(');
  }
  return filterContactsList;
};
export const ContactList = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filter = useSelector(selectFilter);
  const filterContacts = filteredList(items, filter.filter);
  return (
    <List>
      {filterContacts.map(state => {
        return (
          <ContactItem
            key={state.id}
            name={state.name}
            id={state.id}
            number={state.number}
          />
        );
      })}{' '}
    </List>
  );
};
