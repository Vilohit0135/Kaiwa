import InputField from "../components/InputFiled";  // ✅ Fixed typo
import Button from "../components/Button";
import Logo from "../assets/logo.png";              // ✅ Your real logo
import RobotImg from "../assets/robotimg.png";      // ✅ Your real illustration
import Google from "../assets/google.png";      // ✅ Your real illustration
import Microsoft from "../assets/microsoft.png";      // ✅ Your real illustration
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* LEFT SIDE: Illustration */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-10">
        <img
          src={RobotImg}
          alt="Robot Illustration"
          className="max-w-md"
        />
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-16">
        
        {/* Logo + Welcome Text */}
        <div className="text-center mb-8">
          <img src={Logo} alt="KaiwaCX" className="h-12 mx-auto mb-3" />
          <h1 className="text-3xl font-bold">Welcome 👋</h1>
          <p className="text-gray-500">Work email or phone number</p>
        </div>

        {/* Card Container */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          
          {/* Email + Password Fields */}
          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          {/* Remember + Forgot Password */}
          <div className="flex justify-between items-center text-sm my-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <Button text="Login" onClick={() => alert("Logging in...")} />

          {/* Create Account */}
          <p className="text-center mt-4 text-sm">
            New here?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Login Buttons */}
            <div className="flex gap-4">
            {/* Google Button */}
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src={Google} alt="Google" className="h-5 w-5 object-contain" />
            <span>Sign in with Google</span>
            </button>

            {/* Microsoft Button */}
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
            <img src={Microsoft} alt="Microsoft" className="h-5 w-5 object-contain" />
            <span>Sign in with Microsoft</span>
            </button>
            </div>

        </div>
      </div>
    </div>
  );
}
