// const FormInput = ({
//   name,
//   label,
//   placeholder,
//   handleChange,
//   type,
//   ...rest
// }) => {
//   return (
//     <div>
//       <label
//         className="block text-gray-700 text-sm font-bold mb-2"
//         htmlFor={name}
//       >
//         {label}
//       </label>
//       <input
//         className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         id={name}
//         type={type}
//         placeholder={placeholder}
//         name={name}
//         {...rest}
//       />
//     </div>
//   );
// };

// export default FormInput;

const FormInput = ({
  icon,
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  showIcon,
  ...rest
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 text-black"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          required
          {...rest}
        />
        {showIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;
