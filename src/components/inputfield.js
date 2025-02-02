const InputField = ({ onChange, value, placeholder, backgroundColor, textColor, type, disabled, className }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm bg-${backgroundColor} text-${textColor} hover:scale-105 transition-transform ${className}`}
            disabled={disabled}
        />
    );
};

export default InputField;
