export const reqCharacter = async (character) => {
    let url = `https://rickandmortyapi.com/api/character?page=1`;
    
    if (character && typeof character === 'string' && character.trim() !== "") {
        url += `&name=${encodeURIComponent(character)}`;
    }
    
    try {
        const response = await fetch(url);
        
        const data = await response.json();
        return data;
    } catch (error) {
       
    }
};
