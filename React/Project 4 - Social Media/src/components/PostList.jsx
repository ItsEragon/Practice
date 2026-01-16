import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from "../store/post-list-store"
import WelcomeMessage from './WelcomeMessage'
import Loader from './Loader'

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData)
    const [fetching, setFetching] = useState(false)

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
            console.log("Cleaning up useEffect");
            controller.abort();

        }
        // console.log("Fetch ended");
    }, []);


    // const handleGetPostsClick = () => {
    //     // console.log("get post clicked!");


    // }

    return (
        <>
            {fetching && <Loader />}
            {!fetching && postList.length === 0 && <WelcomeMessage />}
            {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
        </>
    )
}

export default PostList
