// http://localhost:3000/courses/12/sessions/1

import { useRouter } from "next/router";

const Sessions = () => {
  const route = useRouter();
  console.log(route.query); //{shortName: '12', sessionsId: '1'}

  return (
    <h1>
      http://localhost:3000/courses/{route.query.shortName}/sessions/
      {route.query.sessionsId}
    </h1>
  );
};

export default Sessions;
