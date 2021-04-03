import {useState} from 'react'
import './SearchBox.css'

const SearchBox = ({onSearch, onClose, isSearching}) => {
    const [searchText, setSearchText] = useState("")

    const handleClickOnClose = () => {
        setSearchText("")
        onClose();
    }

    return (
        <div className={`${isSearching ? "search-at-top" : "search-box"}`}>
            <h2 className={` search-title ${isSearching && "hide"}`}>Buscador de usuarios</h2>
            <div className="search-box-buttons">
                <label>
                    <input type="text" value={searchText} onChange={({ target : { value}}) => setSearchText(value)}></input>
                </label>
                    <button className="search-button" onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
                    {isSearching && <button className="close-button"  onClick={handleClickOnClose}>Cerrar</button>}
            </div>
        </div>
    );
}

export default SearchBox;