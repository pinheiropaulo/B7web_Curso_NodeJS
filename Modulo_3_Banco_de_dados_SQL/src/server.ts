import express, { Request, Response } from 'express';
import path from 'path';
import { router } from './routes/index.routes';

const server = express();
const port = process.env.PORT || 8080;

server.set('view engine', 'mustache');
server.engine('mustache', mustache());

server.use(express.urlencoded({ extended: true }));

server.use(router);

server.use((req: Request, res: Response) => {
  res.status(404).send('Pagina não Encontrada!');
});

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
