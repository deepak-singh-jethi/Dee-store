import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Store/user/userActions";

const initialFormData = {
  username: "",
  password: "",
};

const LoginForm = ({ closeModal }) => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    // closeModal();
    return;
  };

  return (
    <form className="w-full text-center" onSubmit={handleSubmit}>
      <div className="mb-4 w-1/2 mx-auto">
        <label className="block text-sm text-gray-600 mb-2">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 "
        />
      </div>

      <div className="mb-6 w-1/2 mx-auto">
        <label className="block text-sm text-gray-600 mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
