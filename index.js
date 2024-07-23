const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/contacts');

// Config the server
app.use(express.json());
app.use('/contacts', routes);
app.listen(port, () => {
    console.log(`Servidor activo en: http://localhost:${port}`);
});