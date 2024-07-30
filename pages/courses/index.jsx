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
            {/* <Link replace={true} href={`/courses/${course.shortname}`}>
              {course.title}
            </Link>  default => replace=false */}

            {/* <Link href={`/courses/${course.shortname}`}>{course.title}</Link> */}

            {/* برای خوانایی بیشتر میتونیم از این مدل ابجکت استفاده کنیم  */}
            <Link
              href={{
                pathname: "/courses/[shortName]",
                query: {
                  shortName: course.shortname,
                },
              }}
            >
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;
