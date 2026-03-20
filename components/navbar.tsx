"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useClerk} from "@clerk/nextjs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { signOut } = useClerk();

  //always keep the first link as home!
  const links = [
    {href: "/home", name: "Home"},
    {href: "/users/id", name:"Profile"},
    {href: "posts/new", name:"Create Post"},
    {href:"/settings", name:"Settings"}
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  async function handleConfirmSignOut() {
    await signOut({ redirectUrl: "/sign-in" });
  }

  return (
    <>
      <header className="relative z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link
            href={links[0].href}
            className="text-xl font-bold tracking-tight text-white transition hover:text-slate-200"
          >
            Snapboard
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:cursor-pointer"
            >
              Menu
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-slate-900/95 p-2 shadow-xl">
                {links.map((elem, ind)=>(
                  <Link
                  href={elem.href}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                  key={ind}
                  >
                  {elem.name}
                  </Link>
                ))}

                <div className="my-2 border-t border-white/10" />

                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowSignOutModal(true);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-300 transition hover:bg-white/10 hover:cursor-pointer"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {showSignOutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-white">
              Sign out of your account?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Are you sure you want to log out? You will be redirected to the
              sign-in page.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowSignOutModal(false)}
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-white/10 hover:cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirmSignOut}
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02] hover:bg-slate-100 hover:cursor-pointer"
              >
                Yes, sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}