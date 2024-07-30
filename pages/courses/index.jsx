import Link from "next/link";

const Courses = () => {
  return (
    <>
      <h1>Courses Page </h1>
      <ul>
        <li>
          <Link href={"courses/react"}>ReactJS</Link>
        </li>
        <li>
          <Link href={"courses/next-js"}>NextJS</Link>
        </li>
        <li>
          <Link href={"courses/pwa"}>Pwa</Link>
        </li>
      </ul>
    </>
  );
};

export default Courses;
