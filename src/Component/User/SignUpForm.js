import React, { useState } from "react";
import { signUpUser } from "../../Store/user/userActions";
import { useDispatch } from "react-redux";
const initialFormData = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  name: {
    firstName: "",
    lastName: "",
  },
  phone: "",
  address: {
    city: "",
    street: "",
    number: "",
    zipCode: "",
    country: "",
  },
};

const SignUpForm = ({ changeAuthStatus }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [formStep, setFormStep] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        return {
          ...prevData,
          [parent]: {
            ...prevData[parent],
            [child]: value,
          },
        };
      }

      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmitOfButton1 = (e) => {
    e.preventDefault();
    if (formStep === 1) {
      setFormStep(2);
    } else {
      setFormStep(1);
      return;
    }
  };
  const handleSubmitOfButton2 = (e) => {
    e.preventDefault();
    dispatch(signUpUser(formData));
    changeAuthStatus();
  };

  return (
    <form className="w-full max-w-sm">
      {formStep === 1 && (
        <>
          {/* Step 1 Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username:
            </label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </>
      )}
      {/* form step 2 */}
      {formStep === 2 && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4  flex">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City:
              </label>
              <input
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              {" "}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Street:
              </label>
              <input
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Zip Code:
              </label>
              <input
                type="text"
                name="address.zipCode"
                value={formData.address.zipCode}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Country:
              </label>
              <input
                type="text"
                name="address.country"
                value={formData.address.country}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </>
      )}

      <div className="flex items-center justify-between mt-4">
        <button
          type={formStep === 1 ? "submit" : "button"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmitOfButton1}>
          {formStep === 1 ? "Next" : "Previous"}
        </button>
      </div>
      {formStep === 2 && (
        <div className="text-center mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            onClick={handleSubmitOfButton2}>
            Signup
          </button>
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
