# Timer Project with react

### Basic functionality
An infinite timer that can be stopped, resumed and reset.
We can also lap at any given time and lap logged on to a table.


### React concepts
1. Component.
   App: main component
   Header: Load informative static header for the app.
   Timer: Handle timer logic
   Modal: Confirm request to reset time
2. State
    <br>Timer Component<br>
    time: enable the timer to run
    buttonText: enable toggling to use same button to Start, Stop & resume timer.
    modalIsOpen: know when to open modal. In this case a modal comes up to confirm timer reset.
    timerStarted: Use to disable/ enable reset button
    <br>Modal Component<br>
    modalCountDown: update with initial value which is the number of second we wish the modal to remain open. 
                    use this to update progres bar by decrementing by 1 second using setInterval.
                    Reset to initial value on modal closure.

3. refs
   <br>Timer Component:<br>
    timeRef: holds ref to timer to allow it to be cleared when required.

    <br>dialogRef:<br>
    Ref the dialog inside the Modal component, allow closing and opening of the modal.

4. Hooks

    useState: Manage various states as needed by the application.
    useRef: Hold mutable data apart from data as discussed in no.3 above
    useEffect: Used todo stuff after component rendering like start Interval, timeouts and provide cleanups when a component unmounts
    