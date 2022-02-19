import './Method.sass';
import search_icon from '../../assets/svg/method/search.svg';
import done_icon from '../../assets/svg/method/done.svg';
import good_icon from '../../assets/svg/method/good.svg';

const Method = () => {
    return (
        <div className='Method'>
            <div className="method_top_container">
                <div className="method_icon">
                    <img src={search_icon} alt=""search />
                </div>
                <div className="method_icon">
                    <img src={done_icon} alt="done" />
                </div>
                <div className="method_icon">
                    <img src={good_icon} alt="good" />
                </div>
            </div>
            <div className="method_bottom_container">
                <div className="method_text_item">Search Places</div>
                <div className="method_text_item">Select Places</div>
                <div className="method_text_item">Book & Enjoy</div>
            </div>
        </div>
    )
};

export default Method;