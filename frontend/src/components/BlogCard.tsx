import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id : string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (<Link to={`/blog/${id}`}> 
    <div className=" p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex pt-2">
        <div className="flex justify-center flex-col">
          <Avatar name={authorName} size={"small"} />
        </div>
        <div className="font-medium text-gray-500 pl-2">{authorName}</div>
        <div className="flex justify-center flex-col pl-1">
          <Circle />
        </div>
        <div className="text-gray-500 font-normal pl-1">{publishedDate}</div>
      </div>
      <div className="text-3xl font-semibold mt-2">{title}</div>
      <div className="text-lg font-medium pt-2 pb-4 text-gray-700">
        {content.slice(0, 100) + "..."}
      </div>
      <div className="text-md text-slate-500 mt-3">{`${Math.ceil(
        content.length / 100
      )} min read`}</div>
    </div>
    </Link>);
};


export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500">

  </div>
}

export function Avatar({
  name,
  size,
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "h-6 w-6" : "h-10 w-10"
      } `}
    >
      <span
        className={`${size === "small" ? "text-xs" : "text-lg"} text-white`}
      >
        {name[0]}
      </span>
    </div>
  );
}
