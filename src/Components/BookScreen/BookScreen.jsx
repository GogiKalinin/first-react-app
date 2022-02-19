import './BookScreen.sass';
import BookBlock from '../BookBlock/BookBlock';

const BookScreen = (props) => {
    console.log('props', props.data.image);
    return (
        <div
            className='BookScreen'
            style={{
                backgroundImage: `url(${props.data.image})`,
                justifyContent: `flex-${props.data.position}`
            }}
        >
            <BookBlock
                country={props.data.country}
                title={props.data.title}
                text={props.data.text}
                button_text={props.data.button_text}
            />
        </div>
    )
};

export default BookScreen;