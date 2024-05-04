# Movie Catalog Project

This is the frontend for the Movie Catalog project, created using Create React App and `pnpm` for package management. The frontend communicates with the backend API to retrieve information about movies and actors.

You can find the [backend repository here](<backend-repo-url>).

## Installation

To set up the project, follow the instructions below:

### Prerequisites

Ensure you have Node.js installed on your machine. Then, install `pnpm` globally if you haven't already:

```shell
npm install -g pnpm
```

### Clone the repository

Clone the repository to your local machine:

```shell
git clone <repository-url>
cd <repository-name>
```

### Install dependencies

Navigate to the repository directory and install the necessary dependencies:

```shell
pnpm install
```

## Environment Variables

Create a `.env.local` file in the root of the project directory with the below variables to run the project locally. For non-local environments, ensure the same variables are available in your configuration.

```plaintext
PORT=3000
REACT_APP_MOVIE_API=<Your API Server's Root Endpoint. For example: http://localhost:4000/api>
```

- **PORT**: The port the frontend will run on. The default is 3000 (*Optional*).
- **REACT_APP_MOVIE_API**: The URL of the backend API server. For local development, it should point to the backend server.

## Available Scripts

In the project directory, you can run the following scripts:

- **`pnpm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

- **`pnpm test`**: Launches the test runner in interactive watch mode.

- **`pnpm build`**: Builds the app for production in the `build` folder. The build is optimized and ready for deployment.

- **`pnpm eject`**: **Note:** This is a one-way operation. Once you `eject`, you can't revert the changes. It will copy all the configuration files and transitive dependencies into your project, giving you full control.

**Make sure the backend server is running and that the env variables are configured to point to the API root endpoint that it is serving.**

## License

This project is licensed under the [Creative Commons Attribution License (CC BY)](https://creativecommons.org/licenses/by/4.0/). See the [LICENSE](LICENSE) file for more details.

Created by **Madina Omarova**.

## Learn More

If you have any questions, feel free to reach out to `madinaomarovart@gmail.com`.