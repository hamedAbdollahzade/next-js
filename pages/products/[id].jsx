const Product = ({ data }) => {
  return <div>Product Title : {data.title}</div>;
};

export default Product;
export async function getStaticProps(context) {
  const productId = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data = res.json();

  return {
    props: {
      data,
    },
  };
}
