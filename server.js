'use strict';

import { Server } from '@hapi/hapi';
import config from 'config';

const createServer = async (request, response) => {
	const serverConfig = config.get('server');

	const server = new Server({
		host: serverConfig.HOST,
		port: serverConfig.PORT
	});

	return server;
};

export default createServer;
