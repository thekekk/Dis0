import fs from 'fs';
import { listen, createServer, getChannels } from './modules/discord';

const keepAlive = require("../server");
keepAlive();

if (fs.existsSync('./map.json')) {
  listen();
} else {
  getChannels().then((channels) => createServer(channels)).then(() => listen());
}
