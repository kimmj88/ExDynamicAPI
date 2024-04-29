import express from 'express';

const app = express();

const PORT:number = 8080;

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});