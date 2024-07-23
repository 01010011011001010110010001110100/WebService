const express = require('express');
const fs = require('fs');
const router = express.Router();
const dataFile = './data/contacts.json';


// Manage Data in the JSON persistence
const readData = () => {
  const data = fs.readFileSync(dataFile, 'utf8');
  return JSON.parse(data);
};
const writeData = (data) => {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

// EndPoints to Get a list and Post data
router.get('/', (req, res) => {
  try {
    const contacts = readData();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer los datos.' });
  }
});
router.post('/', (req, res) => {
  try {
    const contacts = readData();
    const newcontact = req.body;
    contacts.push(newcontact);
    writeData(contacts);
    res.status(201).json(newcontact);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar los datos.' });
  }
});


module.exports = router;