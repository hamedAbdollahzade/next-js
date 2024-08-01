const Product = ({ data }) => {
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
    fallback: false,
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
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
