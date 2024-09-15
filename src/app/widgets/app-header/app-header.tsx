import {Layout} from "@/app/widgets/_ui/layout";
import {Logo} from "@/app/widgets/_ui/logo";
import {MainNav} from "@/app/widgets/_ui/main-nav";
import {Profile} from "@/app/widgets/_ui/profile";

export function AppHeader({variant}: {
  variant: 'auth' | 'private' | 'public';
}) {
  const isProfile = variant === "private";
  return (
    <Layout
    logo={<Logo/>}
    nav={<MainNav/>}
    profile={isProfile && <Profile/>}
    />
  );
}