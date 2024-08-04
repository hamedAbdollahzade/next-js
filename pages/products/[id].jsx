import { notFound, redirect } from "next/navigation";
import { useRouter } from "next/router";

const Product = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    // zamani vared in shart mishe k karbar id vared kone ke tu params haye ma nabashe va baraye avalin bar miad safhe ro besaze!
    return <h1>fallBack page : Please Wait </h1>;
  }

  return <div>Product Title : {data.title}</div>;
};

export default Product;

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  const paths = data.slice(0, 5).map((product) => {
    return { params: { id: String(product.id) } };
  });

  return {
    paths: paths,
    fallback: true, //false || True || "blocking"
    // فرقی نمیکنه فال بک چی باشه همیشه اون پارامز هایی ک تعیین کردیم ساخته میشن صفحاتش
    // fallback : false => age id dg e barat umad una ro talash nakon fetch koni
    // fallback : true => age id dg e karbar ferestad boro va page uno besaz ke inja chon yekam tul mikeshe dar had 1 sanie mitunim if bezarim modiriatesh konim !
    // fallback : "blocking" => dar in halat ta data safhe jadid biad tu hamun safhe e ke hastim block mishe safhe
  };
  // -----------------VS---------------------
  //   return {
  //     paths: [
  //       { params: { id: "1" } },
  //       { params: { id: "2" } },
  //       { params: { id: "3" } },
  //       { params: { id: "4" } },
  //       { params: { id: "5" } },
  //       { params: { id: "6" } },
  //     ],
  //     fallback: false,
  //   };
}

export async function getStaticProps(context) {
  // اینجا چون داینامیک روت داریم و نکس میخواد بدونه چندتا صفحه باید بسازه نیازه از یک متد دیگه استفاده کنیم
  //! Error: getStaticPaths is required for dynamic SSG pages and is missing for '/products/[id]'.

  const productId = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (res.status !== "200") {
    // اینجوری اگه ریسپانس درست نباشه مارو هدایت میکنه به صفحه نات فوند :D
    //  اگه ما اینو بررسی نکنیم یه همچین خطایی میده در زمانی ک کاربر ایدی بفرسته ک روی سرور اون ایدی وجود نداره Error: Failed to load static props
    return {
      notFound: true,
      // redirect: { destination: "/" },
      // اگه بخوایم به دایرکشن خواستی کاربر رو هدایت کنیم
    };
  }

  const data = await res.json();

  return {
    props: {
      data,
    },
    // notFound: true, // این اگه ترو باشه اولویتش بالاتره از پراپس و درصورتی ک صفحه وجود داشته باشه هم ارور 404 میده
    // برای همین میایم بالاتر جور دیگه ای ازش بهره میبریم :D
  };
}
