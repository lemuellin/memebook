import { db } from "../firebase-config";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

import formatTime from "./formatTime";

const getAllPosts = async () => {
    let postsList = [];
    const postsRef = collection(db, 'All_Posts');
    const postsQuery = query(postsRef, orderBy('time', 'desc'));
    const querySnapshot = await getDocs(postsQuery);
    querySnapshot.forEach(post => {
        let postContent = post._document.data.value.mapValue.fields;
        let username = postContent.username.stringValue;
        let caption = postContent.caption.stringValue;
        let time = formatTime(postContent.time.timestampValue);
        let img = post._document.key.path.segments[6];
        let id = postContent.id.stringValue;

        postsList.push({username: username, caption: caption, time: time, img: img, id:id});
    });
    return postsList;
}

export default getAllPosts;