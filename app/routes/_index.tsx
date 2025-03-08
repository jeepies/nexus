import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Nexus" },
    {
      name: "description",
      content: "Yet another RuneScape tracking application",
    },
  ];
};

export default function Index() {
  return <div className="flex h-screen items-center justify-center"></div>;
}
