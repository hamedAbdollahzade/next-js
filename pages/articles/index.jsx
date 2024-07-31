const Articles = () => {
  return (
    <>
      {/* Css In Js */}
      <h1 style={{ color: "blue" }}>Articles Page ... </h1>

      <h2>test Articles 2</h2>
      {/*  The following libraries are supported in Client Components in the app directory (alphabetical):
chakra-ui
kuma-ui
@mui/material
@mui/joy
pandacss
styled-jsx
styled-components
stylex
tamagui
tss-react
vanilla-extract  */}

      {/* styled-jsx : */}
      <style jsx>{`
        h2 {
          color: green;
        }
      `}</style>
    </>
  );
};

export default Articles;
