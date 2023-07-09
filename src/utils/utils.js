export const normalize = text => text.toLowerCase();

export const findContact = (contacts, name) => {
  return contacts.find(contact => normalize(contact.name) === normalize(name));
};
