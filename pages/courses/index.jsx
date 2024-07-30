import Link from "next/link";

const Courses = () => {
  const courses = [
    { id: 1, title: "React", shortname: "react" },
    { id: 2, title: "Next-Js", shortname: "nextjs" },
    { id: 3, title: "PWA", shortname: "pwa" },
    { id: 4, title: "Node-Js", shortname: "pwa" },
  ];

  return (
    <>
      <h1>Courses Page </h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/courses/${course.shortname}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;
