import { useState } from "react";
import { NavLink } from "react-router-dom";

type SidebarItemProps = {
  keyId: string | number;
  itemInside: { href: string; label: string }[];
  children: React.ReactNode;
};
export default function SideBarItem({
  keyId,
  itemInside,
  children,
}: SidebarItemProps) {
  const [isActiveLink, setIsActiveLink] = useState(false);

  function handleClick() {
    if (isActiveLink) {
      setIsActiveLink(false);
    } else {
      setIsActiveLink(true);
    }
  }

  return (
    <li
      key={Number(keyId)}
      className="p-2 w-full rounded hover:bg-primary/10 items-center"
    >
      <NavLink
        to=""
        onClick={handleClick}
        className={
          isActiveLink
            ? "text-primary-light font-medium text-xl duration-200 hover:!text-bg-primary/90 flex items-center justify-start"
            : "text-zinc-900 text-xl duration-200 hover:!text-black/80 hover:font-semibold flex items-center justify-start"
        }
      >
        {children}
      </NavLink>
      {isActiveLink && (
        <div className=" flex flex-col gap-1 justify-start">
          <ul>
            {itemInside.map((item, index) => {
              return (
                <li key={keyId + `${index}` + item.label}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => {
                      return isActive
                        ? "text-primary-light font-medium text-lg duration-200 group-hover:!text-bg-primary/90 bg-slate-400 flex h-auto"
                        : "text-zinc-900 text-lg duration-200 group-hover:!text-black/70 hover:font-semibold hover:bg-slate-400 flex h-auto py-6";
                    }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
}
