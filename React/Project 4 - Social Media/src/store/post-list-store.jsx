import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)

    const addPost = () => {

    }

    const deletePost = () => {

    }

    return <PostList.Provider
        value={
            {
                postList,
                addPost,
                deletePost,
            }

        }>{children}
    </PostList.Provider>;
}

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to Mumbai',
        body: 'Hi friends, I am going to Mumbai for my vacations. Hope to enjoy a lot.',
        reactions: 2,
        userId: 'user-6',
        tags: ['mumbai', 'vacation', 'trip', 'enjoy']
    },
    {
        id: '2',
        title: 'Going to Shimla',
        body: 'Hi friends, I am going to Shimla for my vacations. Hope to enjoy a lot.',
        reactions: 4,
        userId: 'user-7',
        tags: ['shimla', 'vacation', 'trip']
    }
];

export default PostListProvider;