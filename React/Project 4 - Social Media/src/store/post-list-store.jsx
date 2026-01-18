import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
    postList: [],
    fetching: false,
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    } else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts;
    }

    else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, [])
    const [fetching, setFetching] = useState(false)

    const addPost = (post) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: post,
        })
    }

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: {
                posts,
            }
        })
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    };

    useEffect(() => {
        setFetching(true)
        // console.log("Fetch started");

        const controller = new AbortController()
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
                setFetching(false)
                // console.log("Fetch returned");
            });

        return () => {
            controller.abort();

        }
        // console.log("Fetch ended");
    }, []);

    return <PostList.Provider
        value={
            {
                postList,
                fetching,
                addPost,
                deletePost,
            }

        }>{children}
    </PostList.Provider>;
}

// const DEFAULT_POST_LIST = [
//     {
//         id: '1',
//         title: 'Going to Mumbai',
//         body: 'Hi friends, I am going to Mumbai for my vacations. Hope to enjoy a lot.',
//         reactions: 2,
//         userId: 'user-6',
//         tags: ['mumbai', 'vacation', 'trip', 'enjoy']
//     },
//     {
//         id: '2',
//         title: 'Going to Shimla',
//         body: 'Hi friends, I am going to Shimla for my vacations. Hope to enjoy a lot.',
//         reactions: 4,
//         userId: 'user-7',
//         tags: ['shimla', 'vacation', 'trip']
//     }
// ];

export default PostListProvider;