const SsgPageTest = (props) => {
  console.log("Props ==>", props);

  return (
    <>
      <h1>به صفحه تست مبحث SSG خوش امدید </h1>
      <h2>{props.title} </h2>
      <h2>{props.body}</h2>
    </>
  );
};

export default SsgPageTest;

export async function getStaticProps() {
  // codes run in backend (server)

  console.log("function getStaticProps is Runnig ...");

  return {
    props: {
      title: "تست عنوان",
      body: "بدنه تست",
    },
  };
}
