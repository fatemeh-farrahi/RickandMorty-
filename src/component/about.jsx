import { useMemo } from "react";

export default function About() {
  const list = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];

  const renderedList = useMemo(() => {
    return list.map(({ key, value }) => <div key={key}>{value}</div>);
  }, [list]);

  return <div>{renderedList}</div>;
}
