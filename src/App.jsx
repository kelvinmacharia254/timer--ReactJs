
import timerLogo from '/time-svgrepo-com.svg'
import Timer from "./assets/components/Timer.jsx";


function App() {
    console.log("Render App")
  return (
      <>
          <div id="overlay"></div>
          <div id="content">
              <div id="header-image">
                  <img src={timerLogo} className="logo" alt="Vite logo"/>
              </div>
              <h1>The ultimate Timer</h1>
              <Timer/>
          </div>
      </>
  )
}

export default App
