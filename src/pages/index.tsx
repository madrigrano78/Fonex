import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/headphone");
  }, []);

  return (
    <div>
      <Head>
        <title>FoneX</title>
      </Head>
    </div>
  );
}
