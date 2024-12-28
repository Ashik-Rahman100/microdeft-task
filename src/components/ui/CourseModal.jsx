/* eslint-disable react/prop-types */

export default function CourseModal({ course }) {
  const handleOnSubmit = () => {
    console.log("course", course);

    document.getElementById(course?.id).showModal();
  };
  return (
    <>
      <button className="btn btn-link" onClick={() => handleOnSubmit()}>
        See More ...
      </button>
      <dialog id={course?.id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="font-bold text-lg py-6">Full Description</h1>
          <h1 className="font-bold text-lg py-2">{course?.title}</h1>
          <p>{course?.description}</p>
        </div>
      </dialog>
    </>
  );
}
