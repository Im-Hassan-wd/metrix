import { Iconly } from "react-iconly";

export const listItems = [
  {
    name: "Dashboard",
    icon: <Iconly name="Category" />,
    to: "/",
  },
  {
    name: "Orders",
    icon: <Iconly name="Bag" />,
    to: "/o",
  },
  {
    name: "Customers",
    icon: <Iconly name="TwoUsers" />,
    to: "/c",
  },
  {
    name: "Inventory",
    icon: <Iconly name="Folder" />,
    to: "/i",
  },
  {
    name: "Conversations",
    icon: <Iconly name="Chat" />,
    to: "/chats",
  },
  {
    name: "Settings",
    icon: <Iconly name="Setting" />,
    to: "/s",
  },
];

export const sidebarInfo = [
  {
    name: "Contact support",
    icon: <Iconly name="Game" />,
    to: "/contact",
  },
  {
    name: "Free Gifts Await You",
    icon: <Iconly name="Bag2" />,
    to: "/free",
  },
  {
    name: "Logout",
    icon: <Iconly name="Logout" set="two-tone" />,
    to: "/s",
  },
];
