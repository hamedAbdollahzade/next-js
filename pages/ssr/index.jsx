const SsrPage = ({ posts }) => {
  return (
    <>
      <h1>SSR PAGE : </h1>
      <ul>
        {posts.map((post) => (
          <div className={" p-4 "}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </ul>
    </>
  );
};

export default SsrPage;
export async function getServerSideProps(context) {
  const { params, req: request, res: response } = context;
  console.log("request ======>", request.cookies);
  // Node js Code
  console.log("SSR => getServerSideProps"); // Server - Api Key - Cookie - Token
  console.log("Directory ==>", __dirname);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  //   console.log(res);

  return {
    props: {
      posts: posts.slice(0, 8),
    },
  };
}
