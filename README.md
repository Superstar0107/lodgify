# Project Name: Lodgify Grouped Tasks

## Description

This project is a React-based widget that displays the current progress of the tasks. The user can see the missing tasks of a specific area and mark them as done. The progress is represented as a normalized sum of the values of the checked tasks, and the user can interact with the checkboxes to update the progress bar.

## Installation

To run the project, follow these steps:

1. Clone the repository from the provided GitHub link.

2. Navigate to the project directory in your terminal.

3. Install the dependencies using npm: (node version: v21.2.0)

   ```bash
   npm install
   ```

4. Set Environment variable.

   - Create .env file.
   - Copy below variable.
     `REACT_APP_API_URL=https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress`

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Test the application:

   ```bash
   npm run test:server
   npm run test:cy:open
   ```

7. Open your web browser and go to `http://localhost:5173` to view the widget.

## Usage

Once the project is running, you can interact with the widget to view the progress and mark tasks as done. The user interface is clickable, and you can check/uncheck the tasks to see the progress bar change accordingly.

## Dependencies

The project uses the following main dependencies:

- React
- Redux-toolkit
- Redux-saga
- React-router-dom
- Axios
- Styled-components
- Cypress
- Eslint
- Prettier
- Figma
