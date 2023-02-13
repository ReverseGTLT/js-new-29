import React from 'react';

function Name({name, onNameChange}) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" value={name} onChange={onNameChange} />
        </div>
    )
}

function FavoriteAnimal({animal, onAnimalChange}) {
    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                id="animal"
                value={animal}
                onChange={onAnimalChange}
            />
        </div>
    )
}

function Display({animal}) {
    return <div>{`Ваше любимое животное: ${animal}!`}</div>
}

function App() {
    const [animal, setAnimal] = React.useState('')

    return (
        <form>
            <Name />
            <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>
            <Display animal={animal}/>
        </form>
    )
}

export default App