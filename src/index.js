import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { MantineProvider } from '@mantine/core';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<MantineProvider theme={theme}>
				<App />
			</MantineProvider>
		</Provider>
	</React.StrictMode>
);
