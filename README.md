# 💪 Powerfull Schedule Politech

[![GitHub issues](https://img.shields.io/github/issues/michael2to3/powerfull-schedule-politech)](https://github.com/michael2to3/powerfull-schedule-politech/issues)
[![GitHub forks](https://img.shields.io/github/forks/michael2to3/powerfull-schedule-politech)](https://github.com/michael2to3/powerfull-schedule-politech/network)
[![GitHub stars](https://img.shields.io/github/stars/michael2to3/powerfull-schedule-politech)](https://github.com/michael2to3/powerfull-schedule-politech/stargazers)
[![GitHub license](https://img.shields.io/github/license/michael2to3/powerfull-schedule-politech)](https://github.com/michael2to3/powerfull-schedule-politech/blob/main/LICENSE)

Powerfull Schedule Politech is a web application that displays the schedule for Politech, a college in Ukraine. It is built using React, TypeScript and is designed to be fast and up-to-date. The application retrieves data from another project of mine, Pretty CalDAV Politech Schedule, in JSON format, and presents it in an easy-to-read format.
## 🚀 Features

- Displays the schedule for Politech in a user-friendly format
- Retrieves data from the Pretty CalDAV Politech Schedule server
- Allows users to get a URL for the server to retrieve the schedule in iCal format, which can be integrated with other calendar software such as Google, Bing, and Apple

## 💻 Installation

To run the application, follow these steps:

- Clone this repository to your local machine
- Navigate to the root directory of the project
- Run `npm install` to install the necessary dependencies
- Run `npm start` to start the application
- Open `http://localhost:3000` in your web browser to view the application

## 🔧 Usage

To use the application, follow these steps:

- Open the application in your web browser by navigating to http://localhost:3000
- Enter the name of the group whose schedule you wish to view
- Select the date range for which you wish to view the schedule
- Click the "Get Schedule" button to view the schedule
- To get a URL for the server to retrieve the schedule in iCal format, click the "Get iCal URL" button

### 🐳 Using Docker and Docker Compose

This project can be run using Docker and Docker Compose, which simplifies the process of setting up and running the application.

To get started, make sure you have Docker and Docker Compose installed on your system.
Running the Application

To start the application using Docker Compose, run the following command from the project directory:
```bash
docker-compose up
```

This will start the application and its dependencies in Docker containers.

You can then access the application by navigating to http://localhost:3000 in your web browser.
Stopping the Application

To stop the application and its containers, run the following command:
```bash
docker-compose down
```

This will stop and remove the Docker containers used by the application.

For more information on using Docker and Docker Compose, please refer to the official documentation:
- [Docker](https://docs.docker.com/engine/reference/commandline/dockerd/)
- [Docker Compose](https://docs.docker.com/compose/compose-file/)

## 👨‍💻 Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

- Fork the repository
- Create a new branch for your feature or bug fix
- Make your changes and commit them with descriptive commit messages
- Push your changes to your forked repository
- Submit a pull request to the main repository

## 🙏 Credits

The following open-source libraries were used in the creation of this project:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 📝 License

This project is licensed under the License. See the [LICENSE](https://github.com/michael2to3/powerfull-schedule-politech/blob/main/LICENSE) file for details.
