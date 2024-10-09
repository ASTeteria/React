import React, {FC, useEffect, useState} from 'react';
import Users from './components/users/Users';
import { getUsers, getPostsUser } from './services/api.sevices';

const App: FC = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(users => setUsers(users));
    }, []);

    const userClick = (userId: number) => {
        getPostsUser(userId).then(posts => setPosts(posts));
    };

    return (
        <div className="App">
            <h2>Posts</h2>
            {posts.map(({body, id, title}) => (
                <div key={id}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            ))}
            <h1>Users</h1>
            <Users users={users} onUserClick={userClick} />
        </div>
    );
};

export default App;
