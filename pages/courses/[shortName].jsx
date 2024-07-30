import { useRouter } from "next/router";

const SingleCourse = () => {
  const route = useRouter();
  return <div>SingleCourse {route.query.shortName} </div>;
};

export default SingleCourse;
