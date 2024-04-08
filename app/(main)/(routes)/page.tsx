import { ModeToggle } from "@/components/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton
        afterSignOutUrl="/" />
        <ModeToggle/>
    </div>
  );
}
