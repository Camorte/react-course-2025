import BorderText from './components/BorderText'
import { useState } from 'react'

function App() {
    const textList = ['Hello, world!', 'Hello again!', 'Goodbye!']
    const [showText, setShowText] = useState<boolean>(false)

    const buttonClick = () => {
        setShowText(!showText)
    }

    return (
        <>
            <h1>Hello, this is my website</h1>
            {textList.map((text) => (
                <BorderText borderText={text} />
            ))}
            <p>{showText ? 'I am here' : 'I am not here'}</p>
            <button onClick={buttonClick}>Click me!</button>
            {showText && <p>I am hidden!</p>}
        </>
    )
}

export default App
