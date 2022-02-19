import Button from '../UI/Button/Button';
import './BookBlock.sass';

const BookBlock = (props) => {
    return (
        <div className='BookBlock'>
            <div className="book_block_country">
                {props.country}
            </div>
            <div className="book_block_title">
                {props.title}
            </div>
            <div className="book_block_text">
                {props.text}
            </div>
            <Button text={props.button_text} />
        </div>
    )
};

export default BookBlock;