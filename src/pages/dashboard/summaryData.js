import { Iconly } from "react-iconly";

export const summary = [
  {
    icon: <Iconly name="Graph" primaryColor="blue" size={30} />,
    date: "This week",
    overview: [
      { label: "Sales", value: "N4,000,000.00" },
      { label: "Volume", value: "450", percentage: "20.00" },
    ],
  },
  {
    icon: <Iconly name="TwoUsers" primaryColor="blue" size={30} />,
    date: "This week",
    overview: [
      { label: "Customers", value: "1,250", percentage: "15.80" },
      { label: "Volume", value: "450", percentage: "20.00" },
    ],
  },
];
