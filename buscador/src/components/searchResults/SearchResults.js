import ResultsItems from "./ResultsItems/ResultsItems";

const SearchResults = ({results, isSearching}) => {
    return (
        <div style={{width: "100%"}}>
            {!results?.length && isSearching && <p>No existen resultadosque coincidan con la busqueda</p>}
            {
                results?.map((value) => 
                    <ResultsItems  key={value.id} name={value.name} email={value.email} username={value.username} phone={value.phone} website={value.website}/>
                )
            }
        </div>
    );
}
 
export default SearchResults;