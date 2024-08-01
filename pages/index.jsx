import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/home.module.css";

export default function Home() {
  const route = useRouter();

  const redirect = () => {
    // route.push("/courses/pwa");
    //  میتونیم این مدلی هم بنویسیم
    route.push({
      pathname: "/courses/[shortName]",
      query: { shortName: "react" },
    });

    // اگه بخوایم صفحه یا روت بعدی رو در هیستوری مرورگر جایگزین کرده باشیم از این استفاده میکنیم
    // route.replace("/courses/reactjs");
  };

  return (
    <>
      <h1 className={styles.title}> Home Page </h1>
      <hr />
      <ul className={"flex flex-col  gap-2"}>
        <li className={"bg-red-400 p-2 my-2 rounded-full"}>
          <Link href={"/products"}>products</Link>
        </li>

        <li className={"border p-2 rounded-full bg-cyan-300"}>
          {/* <a href="/courses">Courses</a>  ==> request to server !! vali ma mikhaym SPA bashe ! pas az Component Link estefade mikonim :)    */}
          <Link href={"/courses"}>courses</Link> {/* SPA Page */}
        </li>
        <li>
          <button
            className={"bg-orange-400 p-2 rounded-2xl my-2"}
            onClick={redirect}
          >
            Redirect to Custom page{" "}
          </button>
        </li>
      </ul>
    </>
  );
}
