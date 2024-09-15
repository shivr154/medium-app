import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl ">
          <div className=" col-span-8 ">
            <div className="text-5xl font-extrabold max-w-2xl">{blog.title}</div>
            <div className="text-slate-500 pt-6">Posted on 2nd December 2023</div>
            <div className="pt-4 font-normal text-xl max-w-3xl">{blog.content}</div>
          </div>
          <div className="ml-2 mt-3 col-span-4 ">
            <div className="font-medium">Author</div>
            <div className="flex pt-4 w-full">
              <div className="flex flex-col justify-center">
                <Avatar name={blog.author.name || "Anonymous"} size="big" />
              </div>
              <div className="pl-4">
                <div className="font-bold text-2xl ">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="text-slate-500 pt-2">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
