import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className="search-box">
            <h2>Buscador de usuarios</h2>
            <label>
                <input type="text"></input>
                <button>Buscar</button>
                <button>Cerrar</button>
            </label>
        </div>
    );
}

export default SearchBox;