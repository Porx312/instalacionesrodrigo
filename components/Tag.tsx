import Link from "next/link";
import { slug } from "github-slugger";
interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-orange-500 hover:text-orange-600 dark:hover:text-orange-400"
    >
      {text.split(" ").join("-")}
    </Link>
  );
};

export default Tag;
