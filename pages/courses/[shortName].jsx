import { useRouter } from "next/router";

const SingleCourse = () => {
  const route = useRouter();

  const goBackHandler = () => {
    route.back();
  };

  return (
    <>
      <div>SingleCourse {route.query.shortName}</div>
      <button onClick={goBackHandler}>Go Back</button>
    </>
  );
};

export default SingleCourse;
