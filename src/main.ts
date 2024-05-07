import { ExServer } from './exServer';
import * as controller from 'controller';
import { Server } from 'http';

export function startServer(): Server {
  const server: ExServer = new ExServer(
    [
      new controller.ProfileController(),
      new controller.DbitemController()
    ],
    9000
  );

  return server.listen();
}

startServer();