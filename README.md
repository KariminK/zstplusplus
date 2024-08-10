# ZSTPlusPlus

**ZSTPlusPlus** is a platform designed to provide students with a comprehensive collection of notes for tests and exams in technical schools. Built with React and Vite, this platform allows users to easily navigate through subjects and topics, accessing essential study material stored in JSON files within the `data` folder.

## Features

- **Subject and Topic Navigation:** Easily browse through various subjects and topics to find the study material you need.
- **JSON Data Loading:** All the notes are stored in JSON files, making it easy to update and maintain content without modifying the core code.
- **Fast and Responsive:** Powered by Vite for lightning-fast development and React for a responsive and dynamic user interface.
- **Modular Structure:** The project is designed with modularity in mind, making it easy to extend and add new features.

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/karimink/ZSTPlusPlus.git
   cd ZSTPlusPlus
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The application will be accessible at `http://localhost:3000`.

### Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

The built files will be output to the `dist` folder.

### Project Structure

- `src/` - Contains the main source code of the application.
  - `components/` - Reusable UI components.
  - `pages/` - Main page components.
  - `data/` - JSON files containing the notes for each subject and topic.
  - `assets/` - Static assets such as images, styles, etc.
- `public/` - Static files that will be served directly.
- `dist/` - The output folder for production builds.

### Data Structure

All study notes are stored in JSON files within the `data` folder. Each JSON file corresponds to a specific subject or topic, making it easy to update and manage the content. The structure of a typical JSON file might look like this:

```json
{
  "pliki c++": [
    {
      "title": "ifstream",
      "description": "ifstream służy do odczytu danych plików",
      "code": "ifstream nazwa(\"nazwa_pliku\");"
    },
    {
      "title": "ofstream",
      "description": "ofstream służy do zapisu danych do pliku",
      "code": "ofstream nazwa(\"nazwa_pliku\");"
    }
    //...
  ]
}
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch with your feature or fix: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.
