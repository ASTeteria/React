import React, {FC} from 'react';
import PostForm from "./components/PostForm";
import PostsPage from './pages/PostsPage';


const App: FC = () => {
  
  return (
      <div className="App">
        <PostsPage />
      </div>
  );
};

export default App;
