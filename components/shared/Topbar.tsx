import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignOutButton, OrganizationSwitcher } from "@clerk/nextjs";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          OrganiConnect
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="Logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>

      <OrganizationSwitcher
        appearance={{
          elements: {
            organizationSwitcherTrigger: "px-4 py-2",
          },
        }}
      />
    </nav>
  );
}

export default Topbar;
