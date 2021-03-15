import clsx from "clsx";

import { Image } from "..";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social, description } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center text-primary bg-white rounded-sm p-2`, className)}>
      <p className="text-base leading-7">
        {description}{". "}Follow me on twitter{" "}
        <a className="text-secondary-700" href={`https://twitter.com/${social.twitter}`}>
          @{social.twitter}
        </a>
      </p>
    </div>
  );
}
