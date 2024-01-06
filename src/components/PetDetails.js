import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PetDetails.css';

export function PetDetails() {
    let navigate = useNavigate();
    let location = useLocation();

    const pet = location.state?.pet;

    function goBackToMain() {
        navigate('/');
    }

    if (!pet) {
        return (
            <div>
                <p>No se encontraron detalles de la mascota.</p>
                <button onClick={goBackToMain}>Volver al Listado de Mascotas</button>
            </div>
        );
    }

    return (
        <div className="card-pet">
            <div>
                {pet.adoptado ?
                    <h2>❤️ Hola 😊 Soy <i>{pet.nombre}</i> y ya me adoptaron !!! ❤️</h2> :
                    <h2>💚 Hola 😊 Soy <i>{pet.nombre}</i> y quiero ser tu {pet.animal} !!! 💚</h2>}
            </div>

            <img src={pet.imagenUrl} alt={`Imagen de ${pet.nombre}`} className="pet-image" />

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    {pet.raza && (
                        <tr>
                            <td>Raza</td>
                            <td>{pet.raza}</td>
                        </tr>
                    )}
                    {pet.subRaza && (
                        <tr>
                            <td>SubRaza</td>
                            <td>{pet.subRaza}</td>
                        </tr>
                    )}
                    {pet.edad !== undefined && (
                        <tr>
                            <td>Edad</td>
                            <td>{pet.edad}</td>
                        </tr>
                    )}
                    {pet.sexo && (
                        <tr>
                            <td>Sexo</td>
                            <td>{pet.sexo}</td>
                        </tr>
                    )}
                    {pet.detalles && (
                        <tr>
                            <td>Detalles</td>
                            <td>{pet.detalles}</td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan="2" className={`${pet.adoptado ? 'adoptado' : 'disponible'} no-border`} style={{ textAlign: 'center' }}>
                            {pet.adoptado ? 'Adoptado' : 'Disponible para adopción'}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={goBackToMain} className="button-back">Volver al Listado de Mascotas</button>

                {!pet.adoptado && (
                    <button className="button-adopt">ADOPTAR MASCOTA</button>
                )}
            </div>

        </div>
    );
}

