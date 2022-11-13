import React, {useState} from 'react'

const TestPage = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    };
    return (
        <>
            <div
                style={{
                    backgroundColor: isActive ? '#FFF' : '',
                    cursor: isActive ? 'auto' : '',
                }}
                onClick={handleClick}
            >
                Hello world
            </div>
            <div
                style={{
                    backgroundColor: isActive ? '#FFF' : '',
                    cursor: isActive ? 'auto' : '',
                }}
                onClick={handleClick}
            >
                Hello world
            </div>
            <div
                style={{
                    backgroundColor: isActive ? '#FFF' : '',
                    cursor: isActive ? 'auto' : '',
                }}
                onClick={handleClick}
            >
                Hello world
            </div>
        </>
    )
}

export default TestPage