import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { Search, ChevronDown } from "lucide-react";
import UserProfile from "./user-profile";
import { ThemeSwitcher } from "./theme-switcher";

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li>
              <Link href="/silabus">Silabus</Link>
            </li>
            <li>
              <a>Kategori</a>
              <ul className="p-2">
                <li>
                  <Link href="/tokoh">Tokoh</Link>
                </li>
                <li>
                  <Link href="/era">Era</Link>
                </li>
                <li>
                  <Link href="/tags">Tags</Link>
                </li>
                <li>
                  <Link href="/aliran">Aliran</Link>
                </li>
                <li>
                  <Link href="/glosarium">Glosarium</Link>
                </li>
                <li>
                  <Link href="/teori">Teori</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/tentang">Tentang</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          FilsafatKu
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="btn btn-ghost">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/silabus" className="btn btn-ghost">
              Silabus
            </Link>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                Kategori
                <ChevronDown className="w-4 h-4" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/tokoh">Tokoh</Link>
                </li>
                <li>
                  <Link href="/era">Era</Link>
                </li>
                <li>
                  <Link href="/tags">Tags</Link>
                </li>
                <li>
                  <Link href="/aliran">Aliran</Link>
                </li>
                <li>
                  <Link href="/glosarium">Glosarium</Link>
                </li>
                <li>
                  <Link href="/teori">Teori</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/tentang" className="btn btn-ghost">
              Tentang
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-circle">
          <Search className="w-5 h-5" />
        </button>

        <ThemeSwitcher />

        {user ? (
          <>
            <Link href="/dashboard" className="btn btn-primary btn-sm">
              Dashboard
            </Link>
            <UserProfile />
          </>
        ) : (
          <Link href="/sign-in" className="btn btn-primary btn-sm">
            Masuk
          </Link>
        )}
      </div>
    </div>
  );
}
