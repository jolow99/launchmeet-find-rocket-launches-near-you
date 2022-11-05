import http from 'http';
import { makeDiscordThread } from "./discord/message.js";

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();

  makeDiscordThread("Hello, world!");
}).listen(3002);