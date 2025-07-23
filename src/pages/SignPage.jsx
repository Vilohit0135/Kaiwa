import { Link } from "react-router-dom";
import InputField from "../components/InputFiled";
import Button from "../components/Button";
import Logo from "../assets/logo.png";
import RobotImg from "../assets/RobotImg.png";
import Google from "../assets/google.png";      // ✅ Your real illustration
import Microsoft from "../assets/microsoft.png";

export default function SignupPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* LEFT SIDE IMAGE */}
         <div className="flex-1 flex items-center justify-center bg-gray-100 p-10">
           <img
             src={RobotImg}
             alt="Robot Illustration"
             className="max-w-md"
           />
         </div>
      {/* RIGHT SIDE SIGNUP FORM */}
      <div className="flex-1 flex flex-col justify-center items-center px-16">
        
        {/* Logo + Welcome */}
        <div className="text-center mb-8">
          <img src={Logo} alt="KaiwaCX" className="h-12 mx-auto mb-3" />
          <h1 className="text-3xl font-bold">Create Your Account</h1>
          <p className="text-gray-500">Fill in your details to sign up</p>
        </div>

        {/* Signup Form Card */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

          {/* Full Name */}
          <InputField label="Full Name" type="text" placeholder="John Doe" />

          {/* Work Email */}
          <InputField label="Work Email" type="email" placeholder="you@company.com" />

          {/* Password */}
          <InputField label="Password" type="password" placeholder="Enter your password" />

          {/* Phone Number with Country Selector */}
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <div className="flex gap-2 mb-4">
            <select className="border rounded-lg px-2">
              <option>🇮🇳 +91</option>
              <option>🇮🇩 +62</option>
              <option>🇮🇷 +98</option>
              <option>🇮🇶 +964</option>
              <option>🇮🇪 +353</option>
            </select>
            <input
              type="text"
              placeholder="8123456789"
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Signup Button */}
          <Button text="Sign Up" onClick={() => alert("Signed in")} />

          {/* Already have account? */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              <img
                src={Google}
                alt="Google"
                className="h-5 w-5 object-contain"
              />
              Sign up with Google
            </button>
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              <img
                src={Microsoft}
                alt="Microsoft"
                className="h-5 w-5 object-contain"
              />
              Sign up with Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
