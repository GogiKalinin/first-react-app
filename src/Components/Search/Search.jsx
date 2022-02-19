import './Search.sass';
import search_icon from '../../assets/svg/search/search.svg';

const Search = () => {
    return (
        <div className='Search'>
            <div className="search_input_block">
                <input
                    className='search_input'
                    type="text"
                    placeholder='Search Your Travel Destination'
                />
            </div>
            <div className="search_button_block">
                <button className='search_button'>
                    <div className="search_button_text">
                        Search
                    </div>
                    <div className="search_button_icon">
                        <img src={search_icon} alt="search" />
                    </div>
                </button>
            </div>
        </div>
    )
};

export default Search;