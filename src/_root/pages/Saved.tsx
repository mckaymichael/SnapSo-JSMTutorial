import GridPostList from '@/components/shared/GridPostList';
import Loader from '@/components/shared/Loader';
import { useGetCurrentUser } from '@/lib/react-query/queriesAndMutations'
import { Models } from 'appwrite';

const Saved = () => {
  const { data: currentUser } = useGetCurrentUser();

  const savePosts = currentUser?.save.map((savePost: Models.Document) => ({
    ...savePost.post,
    creator: {
      imageUrl: currentUser.imageUrl,
    },
  })).reverse();

  return (
    <div className='saved-container'>
      <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/saved.svg"
            width={36}
            height={36}
            alt="saved"
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h2>
        </div>
        {!currentUser ? (
          <Loader />
        ) : (
          <ul className="w-full flex justify-center max-w-5xl gap-9">
            {savePosts.lenth === 0 ? (
              <p>No Saved Posts</p>
            ) : (
              <GridPostList posts={savePosts} showStats={false}/>
            )}
          </ul>
        )}
    </div>
  )
}

export default Saved