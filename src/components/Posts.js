import React, { useState } from 'react';

import Post from './Post';

function Posts() {

    const [newPosts ] = useState([
			{
				id: 1,
				name: "muwonge lawrence",
				message: "how are you test one two",
				email: "muwongelawrence44@gmail.com",
				timestamp: "6:00 am",
				postImage:
					"https://res.cloudinary.com/itgenius/image/upload/v1668007542/pexels-mahdi-chaghari-12463279_cwiw1n.jpg",
			},

			{
				id: 2,
				name: "muwonge lawrence",
				message: "how are you test one two",
				email: "muwongelawrence44@gmail.com",
				timestamp: "7:00 am",
				postImage:
					"https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
			},
			{
				id: 3,
				name: "muwonge lawrence",
				message: "how are you test one two",
				email: "muwongelawrence44@gmail.com",
				timestamp: "8:00 am",
				postImage:
					"https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
			},
		]);


    return (

        <div className = "space-y-7">
            { newPosts.map(({id , name ,message, email ,timestamp ,postImage })=> (
                <Post 
                 key = { id }
                 name = { name }
                 message = {message}
                 email = {email}
                 timestamp = {timestamp}
                 postImage = {postImage}
                 />
            ))}
            
        </div>
    ); 
}

export default Posts;
