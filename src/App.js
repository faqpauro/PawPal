import React, { useState, useEffect } from 'react';
import PetCard from './components/PetCard.js';
import { PetDetails } from './components/PetDetails.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchImages() {
  // Definir mascotas simuladas
  const initialPets = [
    {
      id: 1,
      nombre: 'Max',
      animal: 'Perro',
      raza: 'Labrador',
      subRaza: 'Retriever',
      edad: 3,
      sexo: 'Macho',
      detalles: 'Juguetón y cariñoso',
      adoptado: false,
    },
    {
      id: 2,
      nombre: 'Luna',
      animal: 'Gato',
      raza: 'Siames',
      subRaza: null,
      edad: 2,
      sexo: 'Hembra',
      detalles: 'Muy tranquila y sociable',
      adoptado: true,
    },
    {
      id: 3,
      nombre: 'Charlie',
      animal: 'Perro',
      raza: 'Golden Retriever',
      edad: 4,
      sexo: 'Macho',
      detalles: 'Amistoso y enérgico',
      adoptado: false,
    },
    {
      id: 4,
      nombre: 'Bella',
      animal: 'Gato',
      raza: 'Angora',
      edad: 3,
      sexo: 'Hembra',
      detalles: 'Cariñosa y juguetona',
      adoptado: false,
    },
    {
      id: 5,
      nombre: 'Rocky',
      animal: 'Perro',
      raza: 'Bulldog',
      edad: 5,
      sexo: 'Macho',
      detalles: 'Tranquilo y leal',
      adoptado: true,
    },
    {
      id: 6,
      nombre: 'Molly',
      animal: 'Gato',
      raza: 'Persa',
      edad: 2,
      sexo: 'Hembra',
      detalles: 'Dócil y tranquila',
      adoptado: false,
    },
    {
      id: 7,
      nombre: 'Toby',
      animal: 'Perro',
      raza: 'Beagle',
      edad: 6,
      sexo: 'Macho',
      detalles: 'Curioso y amigable',
      adoptado: true,
    },
    {
      id: 8,
      nombre: 'Sophie',
      animal: 'Gato',
      raza: 'Bengala',
      edad: 4,
      sexo: 'Hembra',
      detalles: 'Activa y juguetona',
      adoptado: false,
    },
    {
      id: 9,
      nombre: 'Jack',
      animal: 'Perro',
      raza: 'Pastor Alemán',
      edad: 5,
      sexo: 'Macho',
      detalles: 'Valiente y fiel',
      adoptado: false,
    },
    {
      id: 10,
      nombre: 'Chloe',
      animal: 'Gato',
      raza: 'Maine Coon',
      edad: 3,
      sexo: 'Hembra',
      detalles: 'Independiente y cariñosa',
      doptado: true,
    }
    // Agrega más mascotas según sea necesario
  ];

  const petsWithImages = await Promise.all(initialPets.map(async (pet) => {
    let imageUrl;
        if (pet.animal === 'Perro') {
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          const data = await response.json();
          imageUrl = data.message;
        } else if (pet.animal === 'Gato') {
          const response = await fetch('https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true');
          const data = await response.json();
          imageUrl = `${data[0]}`;
        }
        return { ...pet, imagenUrl: imageUrl };
      }));

  setPets(petsWithImages);
}

fetchImages();
}, []);

  return (
      <Router>
        <div className="App">
          <h1>Adopción de Mascotas</h1>
          <Routes>
            <Route path="/pets/:id" element={<PetDetails />} />
            <Route path="/" element={
              <div className="grid-container">
                {pets.map(pet => <PetCard key={pet.id} pet={pet} />)}
              </div>
            } />
          </Routes>
        </div>
      </Router>
    );
}

export default App;
