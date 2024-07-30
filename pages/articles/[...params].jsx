import { useRouter } from "next/router";

const SingleArticle = () => {
  const route = useRouter();
  const { params = [] } = route.query;
  console.log(params);

  if (params.length > 2) {
    return <h1>Params ziad mifresty Sheytoon :P </h1>;
  }

  return <div>SingleArticle Page</div>;
};

export default SingleArticle;
