import Link from "next/link";

export default function PostCard({post}) {

  return (
    <>
    <div className="border border-slate-400 
        border-dashed p-4 rounded-md h-full bg-red-100 md:w-full w-4/5 mx-auto 
       ">

        <p className="text-slate-600 text-xs">
            {post._id.getTimestamp().toLocaleString(
              "ja-JP", {
                timeZone: "Asia/Tokyo",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              }
            )}
        </p>
        <Link
            href={`/posts/show/${post._id.toString()}`} 
            className="block text-xl font-semibold mb-4 py-3"
        >
            {post.title}
        </Link>
        <p className="text-sm break-words whitespace-pre-wrap">{post.content}</p>
    </div>
    </>
  )
}
