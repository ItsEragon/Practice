import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from "../store/post-list-store"
import WelcomeMessage from './WelcomeMessage'
import Loader from './Loader'

const PostList = () => {
    const { postList, fetching } = useContext(PostListData)

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
