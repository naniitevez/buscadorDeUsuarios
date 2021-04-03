import {useState , useEffect} from 'react'
import SearchBox from "./searchBox/SearchBox"
import './Search.css'
import SearchResults from './searchResults/SearchResults'

const Search = () => {
    const [atTopMargin, setAtTopMargin] = useState(false)
    const [results, setResults] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setData(data)
        }
        getUsers()
    }, [])

    const handleSearchClick = (searchText) => {
        setAtTopMargin(true)
        if(data?.length) {
            const textLowerCase = searchText.toLowerCase()
            const filteredData = data.filter((value) => (
                value.name.toLowerCase().includes(textLowerCase) ||
                value.email.toLowerCase().includes(textLowerCase) ||
                value.username.toLowerCase().includes(textLowerCase) ||
                value.phone.toLowerCase().includes(textLowerCase) ||
                value.website.toLowerCase().includes(textLowerCase)
            ))
            setResults(filteredData)
        }
    }

    const handleCloseCLick = () => {
        setAtTopMargin(false)
        setResults([])
    }

    return (
        <div className={`search ${atTopMargin ? "search-top" : "search-center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseCLick} isSearching={atTopMargin}/>
            <SearchResults results={results} isSearching={atTopMargin}/>
        </div>
    );
}
 
export default Search;