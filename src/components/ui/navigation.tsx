import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAuth } from "@/components/auth-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
];

export default function Navigation() {
  const location = useLocation();
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="relative flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex gap-2">
          {/* Mobile Menu */}
          <div className="flex items-center md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="group size-8" variant="ghost" size="icon">
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <Link to={link.href} className="w-full">
                          <NavigationMenuLink className="block w-full py-1.5 px-2 hover:bg-accent rounded-md text-sm font-medium">
                            {link.label}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                    {!user ? (
                      <>
                        <NavigationMenuItem className="w-full">
                          <Link to="/login" className="w-full">
                            <NavigationMenuLink className="block w-full py-1.5 px-2 hover:bg-accent rounded-md text-sm font-medium">
                              Sign In
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full">
                          <Link to="/register" className="w-full">
                            <NavigationMenuLink className="block w-full py-1.5 px-2 hover:bg-accent rounded-md text-sm font-medium">
                              Sign Up
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      </>
                    ) : (
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuLink
                          className="block w-full py-1.5 px-2 hover:bg-accent rounded-md text-sm font-medium cursor-pointer"
                          onClick={() => signOut()}
                        >
                          Logout
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center gap-6">
            <NavigationMenu className="h-full *:h-full max-md:hidden">
              <NavigationMenuList className="h-full gap-5">
                {navigationLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <NavigationMenuItem key={index} className="h-full">
                      <Link to={link.href} className="h-full flex items-center">
                        <NavigationMenuLink
                          active={isActive}
                          className="text-md text-foreground hover:text-primary border-b-primary hover:border-b-primary data-[active]:border-b-primary data-[active]:text-primary data-[active]:font-semibold h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent focus:bg-transparent active:bg-transparent focus:text-primary flex items-center"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Centered Auth Buttons */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-4 md:flex">
          {!user ? (
            <>
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : (
            <div className="text-sm font-medium">
              Welcome, {user.user_metadata?.name || user.email}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 p-0.5">
            <Badge className="bg-background hover:bg-background text-foreground rounded-full border-none">
              Developer
            </Badge>
          </div>
          <div className="text-2xl font-medium">
            <span className="font-bold text-foreground">Corentin</span>{" "}
            <span className="font-bold text-primary">Piquet</span>
          </div>
          {user && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt={user.user_metadata?.name || user.email || ""} />
                    <AvatarFallback>
                      {(user.user_metadata?.name || user.email)?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-1" align="end">
                <Button variant="ghost" className="w-full justify-start" onClick={() => signOut()}>
                  Log out
                </Button>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </header>
  );
}
