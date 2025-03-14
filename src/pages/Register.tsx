import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Register: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        <form className="mt-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg mb-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg mb-3"
          />
          <Button className="w-full bg-green-600 text-white hover:bg-green-700">
            Register
          </Button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-green-600">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
