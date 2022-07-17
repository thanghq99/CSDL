import Head from "next/head";
import Navbar from "./navbar";
import styles from "../styles/Home.module.css";
import clsx from "clsx";
export default function Layout({ children }) {
  return (
    <div className={clsx(styles.container, "mx-auto")}>
      <Head>
        <title>App</title> {/*quản lý thư viện */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed container h-28 flex flex-col space-y-2 p-2 bg-gray-200">
        <Navbar />
      </div>

      <div className="pt-28">{children}</div>
    </div>
  );
}
