"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
function NavbarItems({ title, params }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div
      className={`hover:text-amber-600 font-bold ${
        genre === params
          ? "underline underline-offset-8 decoration-4 decoration-amber-500  rounded-lg "
          : ""
      }`}
    >
      <Link href={`/?genre=${params}`}>{title}</Link>
    </div>
  );
}

export default NavbarItems;
