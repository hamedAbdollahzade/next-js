import "@/styles/globals.css";

// برای نمایش و پیج مد نظر فعلی استفاده میشه
// هرکامپوننتی ک بخواد تو پیج ما رندر بشه از اینجا گذر میکنند تا نمایش داده شود

export default function App({ Component, pageProps }) {
  return (
    <>
      <h1>Header Section</h1>
      <hr />
      <Component {...pageProps} />
      <hr />
      <h1>Footer Section</h1>
    </>
  );
}
