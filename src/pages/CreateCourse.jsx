import { useState } from "react";
import { toast } from "react-toastify";
import { getTokenFromCookie } from "../utils/cookie";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [bColor, setBColor] = useState("");
  const [bText, setBText] = useState("");

  const token = getTokenFromCookie();
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log({name,email,password})
    try {
      const formData = { title, description, instructor_name: instructor,badge_color: bColor,badge_text: bText };
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.status_code === 200) {
        toast.success(result?.status_message);
      } else {
        toast.error(`Error: Something went wrong`);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Error: Something went wrong`);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-2/3 shrink-0 shadow-2xl">
        <form onSubmit={onSubmit} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Badge Text</span>
              </label>
              <input
                type="text"
                placeholder="Badge Text"
                onChange={(e) => setBText(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Badge Color</span>
              </label>
              <input
                type="text"
                placeholder="Badge Color"
                onChange={(e) => setBColor(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor</span>
              </label>
              <input
                type="text"
                placeholder="Instructor"
                onChange={(e) => setInstructor(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-accent text-white">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
