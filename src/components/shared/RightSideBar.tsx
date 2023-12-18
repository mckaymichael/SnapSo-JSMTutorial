import UserCard from "./UserCard"

const RightSideBar = () => {
  return (
    <div className="rightsidebar">
        <h3 className="h3-bold py-2 w-full mb-[40px]">Top Creators</h3>
        <div className="grid grid-cols-2 h-auto gap-6">
            <UserCard />
        </div>
    </div>
  )
}

export default RightSideBar