import Header from "../components/Header";
import "../css/inputPage.css";
import SearchAll from "../components/SearchAll";
function SearchPage(){
    return (
        <>
        <Header/>
        <div className="searchpageMain">
            <SearchAll/>
        </div>
        </>
    )
}
export default SearchPage;