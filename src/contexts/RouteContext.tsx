import { createContext, ReactNode, useState } from "react";

interface RouteContextType {
  defineRoute: (route: string) => void;
  defineLoginRoute: (route: string) => void;
  defineProfileRoute: (route: string, profile?: any) => void;
  definePositionsRoute: (route: string, profile?: any) => void;
  route: string;
  loginRoute: string;
  profileRoute: string;
  profile: any;
  positionsRoute: string;
  position: any;
}

export const RoutesContext = createContext({} as RouteContextType);

interface RoutesContextProviderProps {
  children: ReactNode;
}

export function RoutesContextProvider({
  children,
}: RoutesContextProviderProps) {
  const [route, setRoute] = useState<string>("dashboard");
  const [loginRoute, setLoginRoute] = useState<string>("login");

  const [profileRoute, setProfileRoute] = useState<string>("profiles");
  const [profile, setProfile] = useState();

  const [positionsRoute, setPositionsRoute] = useState<string>("profiles");
  const [position, setPosition] = useState();

  function defineRoute(route: string) {
    setRoute(route);
  }

  function defineLoginRoute(route: string) {
    setLoginRoute(route);
  }

  function defineProfileRoute(route: string, profile?: any) {
    setProfileRoute(route);
    setProfile(profile);
  }

  function definePositionsRoute(route: string, position?: any) {
    setPositionsRoute(route);
    setPosition(position);
  }

  return (
    <RoutesContext.Provider
      value={{
        defineRoute,
        defineLoginRoute,
        defineProfileRoute,
        definePositionsRoute,
        route,
        loginRoute,
        profileRoute,
        profile,
        positionsRoute,
        position,
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
}
