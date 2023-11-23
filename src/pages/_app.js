import useScrollResotration from "@/hooks/useScrollRestoration";
import Layout from "@/layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  useScrollResotration(router);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
