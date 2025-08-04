"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader
} from "@/components/ui/sidebar";
import { LayoutDashboard, Inbox } from "lucide-react";
import logo from "@/assets/images/logosistemas3-339x96 1.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Image src={logo} alt="" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem key="dashboard">
                <SidebarMenuButton
                  className={`py-3 rounded-2xl text-sm font-medium transition-colors duration-300 ${
                    isActive("/dashboard") ? "bg-[#EBEEF2] text-[#007AFF] pointer-events-none" : ""
                  }`}
                  asChild
                >
                  <Link href="/dashboard">
                    <LayoutDashboard
                      size={22}
                      className={isActive("/dashboard") ? "text-[#007AFF]" : ""}
                    />
                    <span className="text-sm">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="reports">
                <SidebarMenuButton
                  className={`py-3 rounded-2xl text-sm font-medium transition-colors duration-300 ${
                    isActive("/reports")
                      ? "bg-[#EBEEF2] text-[#007AFF] pointer-events-none"
                      : ""
                  }`}
                  asChild
                >
                  <Link href="/reports">
                    <Inbox
                      size={22}
                      className={isActive("/reports") ? "text-white" : ""}
                    />
                    <span className="text-sm">Relatórios</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
