import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/shared/Header";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useNavigate()
  


  const onSubmit = async (e) =>{
    e.preventDefault();
    // console.log({name,email,password})
     try {
            const formData = {name,email,password}
            const response = await fetch(
              'https://react-interview.crd4lc.easypanel.host/api/register',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
              }
            );
      
            const result = await response.json();
            if (result.status_code === 200) {
             toast.success(result?.status_message);
             router("/login")
            } else {
              toast.error(`Error: Something went wrong`);
            }
          } catch (error) {
            console.log(error)
            toast.error(`Error: Something went wrong`)
          }

  }
  return (
    <>
      <Header />
      <>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row lg:w-2/3">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={onSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) =>setName(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    onChange={(e) =>setEmail(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    onChange={(e) =>setPassword(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="/login" className="label-text-alt ">
                      If you have an account.{" "}
                      <span className="link link-hover text-blue-600 font-semibold">
                        Login
                      </span>
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent text-white">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
