const Switch = ({ text, isChecked, onChange, backgroundColor, textColor, className }) => {
    return (
        <label className={`flex items-center ${className}`}>
            <span className={`text-${textColor}`}>{text}</span>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                className={`ml-2 bg-${backgroundColor}`}
            />
        </label>
    );
};

export default Switch;
