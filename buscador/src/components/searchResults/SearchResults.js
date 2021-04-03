import ResultsItems from "./ResultsItems/ResultsItems";
import './SearchResults.css'

const SearchResults = ({results, isSearching}) => {
    return (
        <div>
            {!results?.length && isSearching && <p className="non-results">No existen resultadosque coincidan con la busqueda</p>}
            {
                results?.map((value) => 
                    <ResultsItems  key={value.id} name={value.name} email={value.email} username={value.username} phone={value.phone} website={value.website}/>
                )
            }
        </div>
    );
}
 
export default SearchResults;