import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import UserCard from "@/components/shared/UserCard";
import { toast } from "@/components/ui/use-toast";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Home = () => {

  const { data: posts, isPending: isPostLoading, isError: isErrorPosts } = useGetRecentPosts();
  const { data: creators, isPending: isUserLoading, isError: isErrorCreators } = useGetUsers(10);

  if (isErrorCreators || isErrorPosts) {
    toast({ title: "Something went wrong."})

    return;
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption}/>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="rightsidebar">
      <h3 className="h3-bold py-2 w-full mb-[40px]">Top Creators</h3>
      {isUserLoading && !creators ? (
        <Loader />
      ) : (
        <ul className="grid xl:grid-cols-2 gap-6">
          {creators?.documents.map((creator) => (
            <li key={creator?.$id}>
              <UserCard user={creator} />
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  )
}

export default Home