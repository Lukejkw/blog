import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import { Bio } from "@components/common/Bio"
import { getSiteMetaData } from "@utils/helpers"

export function Layout({ children }) {
  return (
    <div>
      <div className="px-6 py-10 banner">
        <Header />
      </div>
      <div className="w-full min-h-screen">
        <div className="max-w-screen-lg px-4 py-12 mx-auto antialiased font-body">
          <main>{children}</main>
          <footer className="text-lg font-light">
            © {new Date().getFullYear()}, Built by Luke Warren

          </footer>
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isRoot = pathname === "/";
  const { title } = getSiteMetaData();

  return (
    <header
      className={clsx("flex items-center justify-between ", {
        "mb-6": isRoot,
        "mb-2": !isRoot,
      })}
    >
      <div className={"max-w-lg"}>
        <Title title={title} />

        <Bio className="my-10" />
      </div>
    </header>
  );
};

const Title = ({title}) => {
  return <h1>
    <Link href="/">
      <a
        className={clsx(
          "md:text-5xl text-4xl leading-none text-primary no-underline font-display"
        )}
      >
        {title}
      </a>
    </Link>
  </h1>
};
