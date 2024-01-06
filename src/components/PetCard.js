import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PetCard.css';

function PetCard({ pet }) {
  let navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setImageUrl(data.message);
        }
      });
  }, []);

  function handleCardClick() {
    navigate(`/pets/${pet.id}`, { state: { pet } });
  }

  return (
    <div className="pet-card" onClick={handleCardClick}>
      <img src={pet.imagenUrl} alt={`Imagen de ${pet.nombre}`} />
      <h3>{pet.nombre}</h3>
      <p>{pet.animal} - {pet.raza} {pet.subRaza ? `(${pet.subRaza})` : ''}</p>
      <p>Edad: {pet.edad} años</p>
      <p>Sexo: {pet.sexo}</p>
      <p>Detalles: {pet.detalles}</p>
      <p className={pet.adoptado ? 'adoptado' : 'disponible'}>
        {pet.adoptado ? 'Adoptado' : 'Disponible para adopción'}
      </p>
    </div>
  );
}

export default PetCard;



