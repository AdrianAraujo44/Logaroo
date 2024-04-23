import { PostProvider } from "./Contexts/PostContext"
import Home from "./Pages/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <PostProvider>
      <Home />
      <ToastContainer position="bottom-right"  theme="colored"/>
    </PostProvider>
  )
}

export default App
