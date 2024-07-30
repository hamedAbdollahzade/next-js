import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const route = useRouter();

  const redirect = () => {
    route.push("/courses/pwa");
  };

  return (
    <>
      <h1>Home Page </h1>
      <hr />
      <ul>
        <li>
          {/* <a href="/courses">Courses</a>  ==> request to server !! vali ma mikhaym SPA bashe ! pas az Component Link estefade mikonim :)    */}
          <Link href={"/courses"}>courses</Link> {/* SPA Page */}
        </li>
        <li>
          <button onClick={redirect}>Redirect to Custom page </button>
        </li>
      </ul>
    </>
  );
}
