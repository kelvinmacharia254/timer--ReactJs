import timerLogo from '/time-svgrepo-com.svg'

export default function Header(){
    return(
        <>
            <div id="header-image">
                <img src={timerLogo} className="logo" alt="timer logo"/>
            </div>

            <h1>The ultimate Timer</h1>
        </>
    )
}