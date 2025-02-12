import { Calendar, ChevronUp, Home, Inbox, User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

const items = [
  {
    title: "Account",
    form: "Actions",
    list: "List Accounts",
    urlAccount: "/dashboard/account",
    urlList: "/dashboard/listaccounts",
    icon: Inbox,
  },
  {
    title: "Post",
    form: "Actions",
    list: "List Posts",
    urlAccount: "/dashboard/post",
    urlList: "/dashboard/listposts",
    icon: Calendar,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link
              href={"/dashboard"}
              className="uppercase font-semibold text-2xl"
            >
              constblog
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/dashboard"}>
                    <Home />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible  ">
                {items.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>{item.title}</SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <Link href={item.urlAccount}>{item.form}</Link>
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <Link href={item.urlList}>{item.list}</Link>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                ))}
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
