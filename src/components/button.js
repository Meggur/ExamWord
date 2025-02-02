const Button = ({ onClick, backgroundColor, textColor, text, disabled, className }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${className} bg-${backgroundColor} text-${textColor} hover:scale-105 transition-transform`}
        >
            {text}
        </button>
    );
};

export default Button;