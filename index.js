import createServer from './server.js';

const startServer = async (request) => {
	try {
		const server = await createServer();
		await server.start();
		console.log(`Server running at ${server.info.uri}`);
	} catch (error) {
		console.log('Error starting server: ', error);
	}
};

startServer();

/*
# prettier $(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g') --write --ignore-unknown
# git update-index --again
*/
