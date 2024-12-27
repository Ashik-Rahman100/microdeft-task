import { LocalStorageUtil } from "../../utils/localStorage";

export default function Profile() {
  const user = LocalStorageUtil.get("user");
//   console.log("user", user);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-16 rounded-full">
              <span className="text-xl">AI</span>
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name : {user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
}
