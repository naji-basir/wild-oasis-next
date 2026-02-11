import Link from "next/link";
import Navigations from "./components/Navigations";

function Page() {
  return (
    <div>
      <Navigations />
      <h1 className="bg-emerald-300">THE WILD OASIS WITH NEXT❤️</h1>
      <Link href="/cabins">cabins</Link>
    </div>
  );
}

export default Page;
