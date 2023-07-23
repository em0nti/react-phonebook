export const normalize = text => text.toLowerCase();

export const findContact = (contacts, name) => {
  return contacts.find(contact => normalize(contact.name) === normalize(name));
};

export const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = normalize(filter);

  return contacts.filter(
    contact =>
      normalize(contact.name).includes(normalizedFilter) ||
      contact.phone.includes(normalizedFilter)
  );
};