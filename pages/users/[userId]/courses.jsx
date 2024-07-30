// ... users/"dynamicId"/courses

import { useRouter } from "next/router";

const courses = () => {
  const route = useRouter();

  return <h1>users / {route.query.userId} / courses</h1>;
};

export default courses;
