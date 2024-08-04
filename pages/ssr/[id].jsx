const Dynamic = ({ posts }) => {
  return (
    <div>
      <h1>{posts.title} :</h1>
      <p>{posts.body}</p>
    </div>
  );
};

export default Dynamic;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
