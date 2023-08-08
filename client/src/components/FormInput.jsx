const FormInput = ({
  name,
  label,
  placeholder,
  handleChange,
  type,
  ...rest
}) => {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
