import PostCard from "@/components/PostCard";
import { getCollection } from "@/lib/db";
import Link from "next/link";

export default async function Home() {

  const postsCollection = await getCollection('posts')
  const posts = await postsCollection?.find().sort({ $natural: -1}).toArray()

  // console.log(posts)

  if(posts){
    return ( 
      <>
      <div className="mb-10 text-center">
        <h1 className="title"> <span className="text-red-500">K</span>ashsan 技術ブログ</h1>
        <p className="text-green-700 mb-10">
        シニアエンジニアKashsanの<br></br>
        開発技術の向上を記録しています。
        </p>
          <Link href="tech">
          <div className="text-red-500 bold">このブログについて</div>
          </Link> 
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 ">
        {
          posts.map((post) => (
            <div key={post._id}>
              <PostCard post={post}/>
            </div>
          ))}
      </div>
      </>
    );
  } else {
    return <p>Failed to fetch the data from database</p>;
  }
}