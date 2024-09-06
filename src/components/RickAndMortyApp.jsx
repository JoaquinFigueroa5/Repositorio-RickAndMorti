import { useEffect, useState } from "react"
import { SearchCharacter } from "./SearchCharacter"
import { Pagination } from "@mui/material"
import { GridCharacter } from "./GridCharacter"
import { useCharacters } from "../hook/useCharacter"



export const RickAndMortyApp = () => {
    const [currentpage, setCurrentpage] = useState(1)
    const [searchCharacter, setSearchCharacter] = useState("")
    const { characters, total } = useCharacters(currentpage, searchCharacter);
    
    

    const handleSearch = (character) => {
        setSearchCharacter(character)
    }
    
  return (
    <>
        <SearchCharacter onSearch={handleSearch}/>
        <GridCharacter characters={characters} />
        <Pagination className="d-flex justify-content-center" count={Math.round(total/20)} onChange={(e, value) => (setCurrentpage(value))}/>
    </>
  )
}
