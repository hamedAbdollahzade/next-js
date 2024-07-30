import { useRouter } from "next/router";

const SingleArticle = () => {
  const route = useRouter();
  const { slug = [] } = route.query;
  console.log(slug);

  if (slug.length > 2) {
    return <h1>slug ziad mifresty Sheytoon :P </h1>;
  }

  return <div>SingleArticle Page</div>;
};

export default SingleArticle;
