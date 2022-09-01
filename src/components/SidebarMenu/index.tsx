import { useRouter } from "next/router";
import { useState } from "react";
import { UrlObject } from "url";
import { SidebarLabel, SidebarMenuSpan } from "./style";

export function SidebarMenu({ item }) {
  const [sidebarMenu, setSidebarMenu] = useState(false);

  function showSidebarMenu() {
    setSidebarMenu(!sidebarMenu);
  }

  const router = useRouter();
  function sidebarRouter() {
    router.push(item.path);
  }

  return (
    <>
      <SidebarMenuSpan onClick={showSidebarMenu}>
        <div>
          {item.icon}
          <SidebarLabel onClick={sidebarRouter}>{item.title}</SidebarLabel>
        </div>
      </SidebarMenuSpan>
    </>
  );
}
