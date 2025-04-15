// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { glob, globSync, globStream, globStreamSync, Glob } from 'glob';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "codedesignplus" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	aggregate(context);
	entity(context);
	valueObject(context);
	domainEvents(context);
	repository(context);
	controller(context);
	proto(context);
	query(context);
	command(context);
	dtos(context);
	consumers(context);
}


// This method is called when your extension is deactivated
export function deactivate() { }


function aggregate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.aggregate', async () => {
		const aggregate = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the aggregate',
			prompt: 'Aggregate name',
			validateInput: (text) => {
				if (!text) {
					return 'Aggregate name cannot be empty';
				}
				if (text.length < 3) {
					return 'Aggregate name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!aggregate) {
			vscode.window.showErrorMessage('Aggregate name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice aggregate --aggregate "${aggregate}"`);

	});

	context.subscriptions.push(disposable);
}


function entity(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.entity', async () => {
		const entity = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the entity',
			prompt: 'Entity name',
			validateInput: (text) => {
				if (!text) {
					return 'Entity name cannot be empty';
				}
				if (text.length < 3) {
					return 'Entity name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!entity) {
			vscode.window.showErrorMessage('Entity name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice entity --entities "${entity}"`);

	});

	context.subscriptions.push(disposable);
}

function valueObject(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.valueObject', async () => {
		const valueObject = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the value object (vo1,vo2,vo3...)',
			prompt: 'Value Object name',
			validateInput: (text) => {
				if (!text) {
					return 'Value Object name cannot be empty';
				}
				if (text.length < 3) {
					return 'Value Object name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!valueObject) {
			vscode.window.showErrorMessage('Value Object name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice valueObject --valueObjects "${valueObject}"`);
	});

	context.subscriptions.push(disposable);
}

function domainEvents(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.domainEvents', async () => {
		const aggregates = scanFiles('*Aggregate.cs');

		const aggregate = await vscode.window.showQuickPick(aggregates, {
			placeHolder: 'Select an aggregate to add a domain event to',
			canPickMany: false
		});

		const domainEvent = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the domain events (event1,event2,event3...)',
			prompt: 'Domain Event name',
			validateInput: (text) => {
				if (!text) {
					return 'Domain Event name cannot be empty';
				}
				if (text.length < 3) {
					return 'Domain Event name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!domainEvent) {
			vscode.window.showErrorMessage('Domain Event name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice domainEvents --aggregate "${aggregate}"  --domainEvents "${domainEvent}"`);

	});
	context.subscriptions.push(disposable);
}

function repository(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.repository', async () => {
		const repository = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the repository ',
			prompt: 'Repository name',
			validateInput: (text) => {
				if (!text) {
					return 'Repository name cannot be empty';
				}
				if (text.length < 3) {
					return 'Repository name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!repository) {
			vscode.window.showErrorMessage('Repository name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice repository --repository "${repository}"`);
	});

	context.subscriptions.push(disposable);
}

function controller(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.controller', async () => {
		const controller = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the controller ',
			prompt: 'Controller name',
			validateInput: (text) => {
				if (!text) {
					return 'Controller name cannot be empty';
				}
				if (text.length < 3) {
					return 'Controller name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!controller) {
			vscode.window.showErrorMessage('Controller name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice controller --controller "${controller}"`);
	});

	context.subscriptions.push(disposable);
}

function proto(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.proto', async () => {
		const proto = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the proto ',
			prompt: 'Proto name',
			validateInput: (text) => {
				if (!text) {
					return 'Proto name cannot be empty';
				}
				if (text.length < 3) {
					return 'Proto name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!proto) {
			vscode.window.showErrorMessage('Proto name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice proto --proto-name "${proto}"`);

	});
	context.subscriptions.push(disposable);
}

function query(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.query', async () => {
		const aggregates = await scanFiles('*Aggregate.cs');
		const repositories = await scanFiles('*Repository.cs');

		const aggregate = await vscode.window.showQuickPick(aggregates, {
			placeHolder: 'Select an aggregate to add a query to',
			canPickMany: false
		});

		if (!aggregate) {
			vscode.window.showErrorMessage('Aggregate name is required');
			return;
		}

		const repository = await vscode.window.showQuickPick(repositories, {
			placeHolder: 'Select a repository to add a query to',
			canPickMany: false
		});

		if (!repository) {
			vscode.window.showErrorMessage('Repository name is required');
			return;
		}

		const query = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the queries (query1,query2,query3...)',
			prompt: 'Query name',
			validateInput: (text) => {
				if (!text) {
					return 'Query name cannot be empty';
				}
				if (text.length < 3) {
					return 'Query name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!query) {
			vscode.window.showErrorMessage('Query name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice query --aggregate "${aggregate}" --repository "${repository}" --queries "${query}"`);
	});
	context.subscriptions.push(disposable);
}

function command(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.command', async () => {
		const aggregates = await scanFiles('*Aggregate.cs');
		const repositories = await scanFiles('*Repository.cs');

		const aggregate = await vscode.window.showQuickPick(aggregates, {
			placeHolder: 'Select an aggregate to add a command to',
			canPickMany: false
		});

		if (!aggregate) {
			vscode.window.showErrorMessage('Aggregate name is required');
			return;
		}

		const repository = await vscode.window.showQuickPick(repositories, {
			placeHolder: 'Select a repository to add a command to',
			canPickMany: false
		});

		if (!repository) {
			vscode.window.showErrorMessage('Repository name is required');
			return;
		}

		const command = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the command ',
			prompt: 'Command name',
			validateInput: (text) => {
				if (!text) {
					return 'Command name cannot be empty';
				}
				if (text.length < 3) {
					return 'Command name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!command) {
			vscode.window.showErrorMessage('Command name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice command --aggregate "${aggregate}" --repository "${repository}" --commands "${command}"`);
	});

	context.subscriptions.push(disposable);
}

function dtos(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.dtos', async () => {

		const aggregates = await scanFiles('*Aggregate.cs');

		const aggregate = await vscode.window.showQuickPick(aggregates, {
			placeHolder: 'Select an aggregate to add a dto to',
			canPickMany: false
		});

		if (!aggregate) {
			vscode.window.showErrorMessage('Aggregate name is required');
			return;
		}

		const dtos = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the dtos (dto1,dto2,dto3...)',
			prompt: 'Dtos name',
			validateInput: (text) => {
				if (!text) {
					return 'Dtos name cannot be empty';
				}
				if (text.length < 3) {
					return 'Dtos name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!dtos) {
			vscode.window.showErrorMessage('Dtos name is required');
			return;
		}

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice dto --dataTransferObject "${dtos}"`);
	});

	context.subscriptions.push(disposable);
}

function consumers(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('codedesignplus.consumers', async () => {
		
		const consumer = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the consumer',
			prompt: 'Consumer name',
			validateInput: (text) => {
				if (!text) {
					return 'Consumer name cannot be empty'; 
				}
				if (text.length < 3) {
					return 'Consumer name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!consumer) {
			vscode.window.showErrorMessage('Consumer name is required');
			return;
		}

		const aggregates = await scanFiles('*Aggregate.cs');

		let aggregate = await vscode.window.showQuickPick(aggregates, {
			placeHolder: 'Select an aggregate associated with the consumer or enter to create a new one',
			canPickMany: false,
		});

		if (!aggregate) {
			aggregate = await vscode.window.showInputBox({
				placeHolder: 'Enter the name of the aggregate to associate with the consumer',
				prompt: 'Aggregate name',
				validateInput: (text) => {
					if (!text) {
						return 'Aggregate name cannot be empty';
					}
					if (text.length < 3) {
						return 'Aggregate name must be at least 3 characters long';
					}
					return null;
				}
			});
		}

		const action = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the action (action1,action2,action3...)',
			prompt: 'Action name',
			validateInput: (text) => {
				if (!text) {
					return 'Action name cannot be empty';
				}
				if (text.length < 3) {
					return 'Action name must be at least 3 characters long';
				}
				return null;
			}
		});

		if (!action) {
			vscode.window.showErrorMessage('Action name is required');
			return;
		}

		const microservice = await vscode.window.showInputBox({
			placeHolder: 'Enter the name of the microservice that publishes the event',
			prompt: 'Microservice name',
			validateInput: (text) => {
				if (!text) {
					return 'Microservice name cannot be empty';
				}
				if (text.length < 3) {
					return 'Microservice name must be at least 3 characters long';
				}
				return null;
			}
		});

		const terminal = vscode.window.createTerminal('CodeDesignPlus');
		terminal.show();
		terminal.sendText(`yo codedesignplus:microservice consumer --consumer-name "${consumer}" --consumer-aggregate "${aggregate}" --consumer-action "${action}" --consumer-microservice "${microservice}"`);
	});

	context.subscriptions.push(disposable);
}

async function scanFiles(pattern: string): Promise<string[]> {

	const dir = vscode.workspace.workspaceFolders?.[0].uri.fsPath;

	if (dir) {
		const aggregates = await glob(`src/**/*${pattern}`, { cwd: dir, ignore: ['bin/**', 'obj/**'] });

		const files = aggregates.map(f => {
			return path.basename(f).replace(/\Aggregate.cs$/, '');
		});

		return files;
	}

	vscode.window.showErrorMessage('No workspace folder found. Please open a folder and try again.');

	return [];
}