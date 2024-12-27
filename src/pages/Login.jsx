import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/shared/Header";
import { setTokenInCookie } from "../utils/cookie";
import { LocalStorageUtil } from "../utils/localStorage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log({email,password})

    try {
      const formData = { email, password };
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      console.log("loggin", result);

      if (result?.status_code === 200) {
        // Save user to localStorage
        LocalStorageUtil.set("user", result?.data?.user);
        // save token
        setTokenInCookie(result?.data?.token);
        toast.success(result?.status_message);
        router("/courses")
      } else {
        toast.error(`Error: Something went wrong`);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Error: Something went wrong`);
    }
  };
  return (
    <>
      <Header />
      <>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row lg:w-2/3">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
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
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
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
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="/register" className="label-text-alt ">
                      If you have not yet any account.{" "}
                      <span className="link link-hover text-blue-600 font-semibold">
                        Please register.
                      </span>
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent text-white">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
