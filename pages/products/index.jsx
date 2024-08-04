import Link from "next/link";

const Products = ({ data }) => {
  return (
    <>
      <h1 className={"text-stone-950"}>
        Products Page (Pre-Rendering SSG With Fetch Data){" "}
      </h1>
      <ul className={"flex flex-col gap-2 bg-slate-200 p-2"}>
        {data.map((item) => (
          <li key={item.id} className={"flex justify-between"}>
            <Link href={`/products/${item.id}`}>
              {item.id} - {item.title}{" "}
            </Link>
            <img src={item.image} alt="image" className={"w-10"} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await res?.json();

  console.log("getStaticProps ==> ISR");

  // Only Run Server
  //   console.log(data);

  // Run Node.js Code
  console.log("DirectName ==>", __dirname);

  return {
    props: { data },
    revalidate: 10, // 10 Second
  };

  //? NOTE :
  //! Security
  // getStaticProps Only use in Pages Folder
  // return Object (Props Property)
}
