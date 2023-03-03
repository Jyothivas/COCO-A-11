import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'
import Heroes from './Heroes'

function Hero(props) {

    const [name, setName] = useState('')
    const [heros, setHero] = useState([
        {name:'Peter'},
        {name:'John'},
        {name:'Sam'},
        {name:'Harry'},
        {name:'Tommy'},
]);
    const formSubmit = (e) => {
        e.preventDefault();
        const hero = {
            name
        }
        setHero([...heros, hero])

        props.setHeroData({heros});
    }
    const deleteHero=(name)=>{
       setHero(heros.filter(hero=> hero.name!==name));
    
        console.log(heros)
    }

    return (
        <>
            <div className='m-2'>
                <h1>My Heroes</h1>
                <form onSubmit={formSubmit}>
                    <label>Hero name:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    <div className='m-2'> <Button type='submit' >Add Hero</Button></div>
                </form>
            </div>
            <ul>
            {
                heros.map((hero, index) => {
                     return (
                        <li>
                            <a href='/' ><span className='badge'>{index + 1}</span>{hero.name}</a>
                            <button className="delete" onClick={()=>deleteHero(hero.name)}>x</button>
                        </li>
                     )
                })
            }
            </ul>
        </>
    )
}

export default Hero