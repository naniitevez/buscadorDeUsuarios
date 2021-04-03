import './SearchResults.css'

const ResultsItems = ({name, email, username, phone, website}) => {
    return (
        <div className="search-results">
            <h4>{name}</h4>
            <div className="content-information">
                <div>
                    <p><strong>Nombre de usuario:</strong> {username}, </p>
                    <p><strong>email:</strong> {email},</p>
                    <p><strong>número de teléfono:</strong> {phone},</p>
                    <p><strong>website:</strong> {website}</p>
                </div>
                    <button>Más información</button>
            </div>
        </div>
    );
}

export default ResultsItems;