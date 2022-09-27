import { ReactNode } from "react";
import { HomeSideBar } from "../HomeSideBar";
import { MainContent } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: LayoutProps) {
  return (
    <MainContent>
      <HomeSideBar />
      <main>{children}</main>
    </MainContent>
  );
}
