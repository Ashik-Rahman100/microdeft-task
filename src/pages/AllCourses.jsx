import { useEffect, useState } from "react";
import CourseCard from "../components/ui/CourseCard";
import { getTokenFromCookie } from "../utils/cookie";

export default function AllCourses() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = getTokenFromCookie();

  useEffect(() => {
    fetch("https://react-interview.crd4lc.easypanel.host/api/course", {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code == 200) {
          setData(data?.data?.data);
          setLoading(false);
        }
      });
  }, []);

  console.log("Data", data);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="min-h-screen loading loading-bars loading-md"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-14">
        {data.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}
