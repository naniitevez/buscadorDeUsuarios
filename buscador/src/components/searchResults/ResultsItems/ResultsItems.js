import './ResultsItems.css'

const ResultsItems = ({name, email, username, phone, website}) => {
    return (
        <div className="search-results">
            <h4>{name}</h4>
            <div className="content">
                <div className="content-information">
                    <div>
                        <p><strong>Nombre de usuario:</strong> {username} </p>
                        <p><strong>Email:</strong> {email}</p>
                    </div>
                    <div>
                        <p><strong>Número de teléfono:</strong> {phone}</p>
                        <p><strong>Website:</strong> {website}</p>
                    </div>
                </div>
                    <a href="/"><button className="more-info">Más información</button></a>
            </div>
        </div>
    );
}

export default ResultsItems;