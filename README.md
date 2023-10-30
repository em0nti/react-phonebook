# Contact Book Application (Frontend)

## Overview

A comprehensive Contact Book Application built with React and Redux, featuring user registration, login, and a private collection of contacts.

## Features

- **User Authentication**: Register new users, log in existing ones, and update user details.
- **Contact Management**: Add, update, and delete your private collection of contacts.
- **Routing**: Utilize React Router for effective client-side routing.
- **Styling**: Integrated with the Mantine styling library for a sleek and responsive UI.

## Prerequisites

- Node.js (LTS version recommended)
- npm

## Installation & Development Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/react-phonebook.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd contact-book
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Start Development Mode**

    ```bash
    npm start
    ```

5. **Visit in Browser**

    Go to `http://localhost:3000` in your web browser.

## Deploying to GitHub Pages

1. **Update Homepage Field**

    Edit the `homepage` field in `package.json`:

    ```json
    "homepage": "https://your_username.github.io/your_repo_name/"
    ```

2. **Configure GitHub Pages**

    Go to `Settings > Pages` and set the distribution from `/root` folder of the `gh-pages` branch.

### Deployment Status

- Yellow: Building and deploying.
- Green: Successfully deployed.
- Red: Error during linting, build, or deployment.

## Routing Configuration

If you're using `react-router-dom`, configure the `<BrowserRouter>` component:

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```
## Technologies

- React
- Redux
- Mantine (Styling library)

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License
MIT License. See LICENSE for more information.