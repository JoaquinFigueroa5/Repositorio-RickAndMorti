import { useState, useEffect } from "react";
import { reqCharacter } from "../service/character";

export const useCharacters = (searchCharacter, currentPage) => {
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})

    useEffect(() => {
        reqCharacter(searchCharacter, currentPage).then((data) => {
            setCharacters(data.results)
            setInfo(data.info)
        })
    }, [searchCharacter, currentPage])

    return { characters, info }
};
