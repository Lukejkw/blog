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
      <div className="px-6 py-20 banner">
        <Header />
      </div>
      <div className="w-full min-h-screen dark:bg-dim-gray dark:text-white">
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

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isRoot = pathname === "/";
  const isDarkMode = resolvedTheme === "dark";
  const { title } = getSiteMetaData();

  return (
    <header
      className={clsx("flex items-center justify-between ", {
        "mb-8": isRoot,
        "mb-2": !isRoot,
      })}
    >
      <div className={"max-w-lg"}>
        {isRoot ? <LargeTitle title={title} /> : <SmallTitle title={title}  />}

        <Bio className="my-14" />
      </div>
      {mounted && (
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className={isRoot ? 28 : 24}
        />
      )}
    </header>
  );
};

const LargeTitle = ({title}) => {
  return <h1>
    <Link href="/">
      <a
        className={clsx(
          "text-5xl font-black leading-none text-primary no-underline font-display",
          "sm:text-5xl",
          "dark:text-white"
        )}
      >
        {title}
      </a>
    </Link>
  </h1>
};

const SmallTitle = ({title}) => (
  <h1>
    <Link href="/">
      <a
        className={clsx(
          "text-2xl font-black text-black no-underline font-display",
          "dark:text-white"
        )}
      >
        Luke Warren's Blog
      </a>
    </Link>
  </h1>
);
