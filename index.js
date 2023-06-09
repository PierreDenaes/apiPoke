// Description: Ce fichier contient le code du serveur Node.js

// Import des modules

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// class Object carte pokemon
class CartePokemon {
  static id = 0;

  constructor(nom, type, imageSrc) {
    this.id = ++CartePokemon.id;
    this.nom = nom;
    this.type = type;
    this.imageSrc = imageSrc;
  }
}

// Récupérer la page index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Récupérer toutes les cartes Pokemon dans le fichier pokemonList.json methode GET
app.get('/cartes', (req, res) => {
  fs.readFile('pokemonList.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur serveur');
      return;
    }
    const cartes = JSON.parse(data).cartesPokemon;
    res.send(cartes);
  });
});

// Récupérer une carte Pokemon spécifique en utilisant son nom dans le fichier pokemonList.json methode GET
app.get('/cartes/:nom', (req, res) => {
  
  // Code à écrire
  
});

// Ajouter une carte Pokemon dans le fichier pokemonList.json methode POST
app.post('/cartes', (req, res) => {
  
  // Code à écrire
  
});

// Modifier une carte Pokemon à partir de son id dans le fichier pokemonList.json methode PUT
app.put('/cartes/:id', (req, res) => {
  
  // Code à écrire
});

// Supprimer une carte Pokemon à partir de son nom dans le fichier pokemonList.json methode DELETE
app.delete('/cartes/:nom', (req, res) => {

  // Code à écrire

});

app.listen(
3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
