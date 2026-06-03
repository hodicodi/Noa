import express from 'express' ;
import type { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
const PORT: number = 3000;

app.use(cors);
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript server!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
