import PostCard from "@/components/PostCard";
import { getCollection } from "@/lib/db";

export default async function Home() {

  const postsCollection = await getCollection('posts')
  const posts = await postsCollection?.find().sort({ $natural: -1}).toArray()

  // console.log(posts)

  if(posts){
    return ( 
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 ">
        {
          posts.map((post) => (
            <div key={post._id}>
              <PostCard post={post}/>
            </div>
          ))}
      </div>
    );
  } else {
    return <p>Failed to fetch the data from database</p>;
  }
}