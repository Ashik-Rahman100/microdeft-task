import CourseModal from "./CourseModal";

/* eslint-disable react/prop-types */
export default function CourseCard({ course }) {
  // console.log(course);

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img className="bg-cover" src={course?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="">
          <div className="pb-2">
            Published:{" "}
            <span className="badge badge-outline">{course?.created_at}</span>
          </div>
          <div className="pb-2">
            Instructor:{" "}
            <span className="badge badge-outline">
              {course?.instructor_name}
            </span>
          </div>
          <div>
            Author:{" "}
            <span className="badge badge-outline">{course?.author?.name}</span>
          </div>
        </div>
        <h2 className="card-title">
          {course?.title}
          <div
            style={{ backgroundColor: course?.badge_color }}
            className={`badge   `}
          >
            {course?.badge_text}
          </div>
        </h2>
        <p>{course?.description.slice(0,100)}</p>
        <div className="card-actions">
         <CourseModal course={course} />
        </div>
      </div>
    </div>
  );
}
