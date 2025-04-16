# CodeDesignPlus Microservices Net

**CodeDesignPlus Microservices Net** is a Visual Studio Code extension that provides tools to help you design microservices in .NET. This extension leverages the [CodeDesignPlus Generator](https://www.codedesignplus.com/generators/) to streamline the creation of various components such as aggregates, entities, value objects, domain events, repositories, controllers, protos, queries, DTOs, commands, and consumers.

Each command is fully documented in the [CodeDesignPlus Microservice Generator Documentation](https://www.codedesignplus.com/generators/microservice/).

## Features

This extension includes the following commands:

- **CodeDesignPlus: Add Aggregate**: Generate a new aggregate.
- **CodeDesignPlus: Add Entity**: Generate a new entity.
- **CodeDesignPlus: Add Value Objects**: Generate new value objects.
- **CodeDesignPlus: Add Domain Events**: Generate new domain events.
- **CodeDesignPlus: Add Repository**: Generate a new repository.
- **CodeDesignPlus: Add Controller**: Generate a new controller.
- **CodeDesignPlus: Add Proto**: Generate a new proto file.
- **CodeDesignPlus: Add Queries**: Generate new queries.
- **CodeDesignPlus: Add Data Transfer Objects**: Generate new DTOs.
- **CodeDesignPlus: Add Commands**: Generate new commands.
- **CodeDesignPlus: Add Consumers**: Generate new consumers.

## Prerequisites

This extension requires the [CodeDesignPlus Generator](https://www.codedesignplus.com/generators/) to be installed. Follow the installation guide provided in the [official documentation](https://www.codedesignplus.com/generators/).

## Installation

1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Open the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac).
3. Search for **CodeDesignPlus Microservices Net** and install the extension.
4. Ensure the [CodeDesignPlus Generator](https://www.codedesignplus.com/generators/) is installed on your system.

## Usage

1. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
2. Search for one of the commands, such as `CodeDesignPlus: Add Aggregate`.
3. Follow the prompts to generate the desired component.
4. The extension will execute the corresponding generator command in the terminal.

## Development

### Setting Up the Environment

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Compile the project with `npm run compile`.

### Available Scripts

- `npm run watch`: Watch for changes and recompile automatically.
- `npm run lint`: Run ESLint to check for code style issues.
- `npm run test`: Run tests for the extension.

### Debugging

1. Press `F5` to launch a new instance of Visual Studio Code with the extension loaded.
2. Set breakpoints in `src/extension.ts` to debug the extension.
3. Use the Debug Console to view logs.

## Documentation

For detailed documentation on each command, visit the [CodeDesignPlus Microservice Generator Documentation](https://www.codedesignplus.com/generators/microservice/).

## Publishing

1. Reduce the extension size and improve startup time by [bundling the extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
2. Publish the extension to the [Visual Studio Code Marketplace](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

Refer to the license in the repository.

---

Thank you for using **CodeDesignPlus Microservices Net**!