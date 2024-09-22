import {Layout} from "@/app/widgets/app-header/_ui/layout";
import {Logo} from "@/app/widgets/app-header/_ui/logo";
import {MainNav} from "@/app/widgets/app-header/_ui/main-nav";
import {Profile} from "@/app/widgets/app-header/_ui/profile";

export function AppHeader({variant}: {
  variant: 'auth' | 'private' | 'public';
}) {
  const isProfile = variant !== "auth";
  return (
    <Layout
    logo={<Logo/>}
    nav={<MainNav/>}
    profile={isProfile && <Profile/>}
    />
  );
}