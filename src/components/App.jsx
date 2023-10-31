// core styles are required for all packages
import '@mantine/core/styles.css';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...
import React, { useEffect } from 'react';
import FormAddContact from './FormAddContact';
import { Alert, Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllThunk } from 'redux/actions';
import { selectError, selectIsLoading } from 'redux/selectors';
import Filter from './Filter';

const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchAllThunk());
	}, [dispatch]);

	return (
		<Container className="w-50 p-3">
			<Section title="Phonebook">
				<FormAddContact />
			</Section>
			<Section title="Contacts">
				{isLoading && !error && <Alert variant="secondary">Request in progress...</Alert>}
				{error && (
					<Alert variant="danger" onClose={() => dispatch(fetchAllThunk())} dismissible>
						<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
						<p>{error}</p>
					</Alert>
				)}
				<>
					<Filter />
					<Contacts />
				</>
			</Section>
		</Container>
	);
};

export default App;
