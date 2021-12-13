const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
});

// this optional
const titleChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredTitle: event.target.value,
    })
}; 

// this is another optional
const titleChangeHandler = (event) => {
    setUserInput((prevState)=> {
        return {...prevState, enteredTitle: event.target.value };
    });
};