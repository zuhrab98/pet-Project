import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = ({store, addPostActionCreator, updatePostTextActionCreator}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={store.state.profilePage} dispatch={store.dispatch}/>
        </div>
    )
}