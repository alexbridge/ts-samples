import express, { Application } from 'express';

const app: Application = express();
const PORT: number = 3000;
const HOST: string = '0.0.0.0';

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Healthy');
});

app.get('/echo', (req, res) => {
  res.send('Express + TypeScript Server');
});

app
  .listen(PORT, HOST, () => {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('Error: address already in use');
    } else {
      console.log(err);
    }
  });
