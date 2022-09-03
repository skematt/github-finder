import {useContext} from 'react'
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults(props) {
    const {users, loading, fetchUsers} = useContext(GithubContext)
    const export_option = useContext(GithubContext)
    console.log(export_option)
    console.log('Before fetching users')
    console.log(users)
    console.log(loading)
    console.log(fetchUsers)


    if (!loading) {
        return (
            <div className={'grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'}>

                {users.map((user) => (
                    <UserItem key={user.id} user={user}
                    />
                ))}
            </div>
        );
    } else {
        return (<Spinner />)
    }

}

export default UserResults;