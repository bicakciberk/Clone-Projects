import Sidebar from "./components/sidebar/sidebar";
import Posts from "./components/posts/posts";
import Right from "./components/right/right";

function App() {
  return (
    <div className="App bg-black flex justify-center w-full top-0 left-0 min-h-[100vh] text-white relative">
      <Sidebar></Sidebar>
      <Posts></Posts>
      <Right></Right>
    </div>
  );
}

export default App;
