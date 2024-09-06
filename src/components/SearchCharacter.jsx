import { useState } from "react";

export const SearchCharacter = ({ onSearch }) => {
    const [character, setCharacter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario (recarga de página)
        onSearch(character); // Llama a la función onSearch pasando el valor del estado character
    };

    return (
        <div className="container d-flex flex-row justify-content-center align-items-center mt-5">
            <form className="d-flex" onSubmit={handleSubmit}>
                <input 
                    className="form-control" 
                    type="text" 
                    value={character} // Usa el estado character como valor del input
                    onChange={(e) => setCharacter(e.target.value)} // Actualiza el estado character en cada cambio del input
                    placeholder="Buscar personaje" // Opcional, para mejor experiencia de usuario
                />
                <input 
                    className="btn btn-outline-dark" 
                    type="submit" 
                    value="Buscar Personaje"
                />
            </form>
        </div>
    );
};
