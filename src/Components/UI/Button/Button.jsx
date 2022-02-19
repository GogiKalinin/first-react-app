import './Button.sass';

const Button = (props) => {
    return (
    <button className="custom_button">
        {props.text}
    </button>
    )
};

export default Button;