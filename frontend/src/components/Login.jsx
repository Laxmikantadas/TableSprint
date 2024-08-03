import React from 'react';
import Logo from "../assets/i3.jpg";
import back from "../assets/back.png";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background bg-black" style={{ backgroundImage: `url(${back})`, backgroundRepeat:"no-repeat", backgroundSize: "cover" }}>
      <div className="bg-white dark:bg-card rounded-lg shadow-lg p-8 w-full max-w-md mx-4">
        <h1 className="text-2xl font-semibold text-primary text-center mb-4">
          <img hidden alt="TableSprint logo" src={Logo} />
        </h1>
        <p className="text-muted-foreground text-center mb-6 text-slate-600">Welcome to TableSprint admin</p>
        <form>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1" htmlFor="email">Email-id</label>
            <input className="w-full p-2 border border-border rounded" type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1" htmlFor="password">Password</label>
            <input className="w-full p-2 border border-border rounded" type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="flex justify-between mb-4">
            <a href="#" className="text-accent hover:underline ml-auto">Forgot Password?</a>
          </div>
          <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg bg-violet-800 text-white">Log In</button>
          <Link to={"/register"} className="block text-center bg-secondary border border-border text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg mt-4 bg-transparent text-violet-800 hover:text-violet-900">Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
