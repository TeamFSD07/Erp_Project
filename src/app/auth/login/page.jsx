import React from 'react'

function LoginPage() {
  return (
    <div className="container flex items-center justify-center h-screen bg-gray-100">
    <div className="form max-w-md w-full bg-white rounded-md shadow-md overflow-hidden">
      <header className="text-center text-2xl font-semibold py-6 bg-purple-800">Login</header>
      <form className="p-6">
      <div className="field input-field mb-4">
          <input
            type="username"
            placeholder="Username"
            className="input w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="field input-field mb-4">
          <input
            type="password"
            placeholder="Password"
            className="input w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
       
        <div className="flex justify-between items-center mb-4">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot password?
          </a>
          <button className="button bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700">
           Login
          </button>
        </div>
      </form>
      <div className="form-link text-center py-4">
      <span>
            You don't have an account? Sign Up here{' '}
            <Link href="/auth/signup">
              <a className="text-indigo-600 hover:underline">Sign Up</a>
            </Link>
          </span>
      </div>
    </div>
  </div>
     
  );
}

export default LoginPage