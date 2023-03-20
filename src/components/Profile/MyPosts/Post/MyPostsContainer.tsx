import React from "react";
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/profile-reducer";
import {StoreContext} from "../../../../StoreContext";

export const MyPostsContainer = () => {

    return (

        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                    store.dispatch(onPostChangeActionCreator(''))
                }

                const onPostChange = (text: string) => {
                    store.dispatch(onPostChangeActionCreator(text))
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addNewPost={addPost}
                                postData={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}
                />
            }
            }
        </StoreContext.Consumer>
    )
}