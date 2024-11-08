import './App.css'

import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from './globals'

function App() {

  return (
    <div>
     <h1>Hi! My name is <span className={"awesome"}>Gabriele Bianchi</span></h1>
     <p>This website is currently work in progress<br/>Hopefully not for long :)</p>
     <p>Meanwhile, you can check my <a href={GITHUB_PROFILE_URL}>GitHub profile</a> or my <a href={LINKEDIN_PROFILE_URL}>Linkedin page</a></p>
    </div>
  )
}

export default App
