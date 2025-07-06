import colors from "@/lib/colors";
import { Dividericon } from "@/services/assets/svgs";
import Link from "next/link";

function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: { name: string; link: string }[];
}) {
  return (
    <ul className="flex items-center gap-2 text-sm font-inter uppercase">
      {breadcrumbs?.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          {index !== breadcrumbs?.length - 1 ? (
            <Link className="text-text-600" href={item?.link}>
              {item?.name}
            </Link>
          ) : (
            <span className="text-text-900 font-bold cursor-default">
              {item?.name}
            </span>
          )}
          {index !== breadcrumbs?.length - 1 && (
            <Dividericon className="w-[7px] h-7" color={colors.natural[200]} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumbs;
