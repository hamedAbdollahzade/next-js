import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page </h1>
      <hr />
      <ul>
        <li>
          {/* <a href="/courses">Courses</a>  ==> request to server !! vali ma mikhaym SPA bashe ! pas az Component Link estefade mikonim :)    */}
          <Link href={"/courses"}>courses</Link> {/* SPA Page */}
        </li>
      </ul>
    </>
  );
}
