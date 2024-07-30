import { useRouter } from "next/router";

const CoursesPage = () => {
  const route = useRouter();
  console.log("return useRouter in courses page ==> ", route);

  return <h1> Dynamic Route Courses {route.query.id} </h1>;
};

export default CoursesPage;
