import { Table } from "@repo/ui/table";
import Cities from "../component/getCity";

const LINKS = [
  {
    title: "Docs",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];

const columns = [
  { accessorKey: "title", header: "title" },
  { accessorKey: "href", header: "href", size: 50, enableResizing: true },
  {
    accessorKey: "description",
    header: "description",
    size: 350,
    sortable: true,
  },
];

const [a, b] = "a b".split(" ").map(Number);

// console.log(cities);

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <Cities />
        <Table columns={columns} data={LINKS}></Table>
      </div>
    </main>
  );
}
