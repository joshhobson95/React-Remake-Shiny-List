import {useState, useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import AuthContext from '../store/authContext'

const Form = () => {
    const {token, userId} = useContext(AuthContext)
    const navigate = useNavigate()

    const [pokemonId, setPokemonId] = useState('')
    const [pokemonName, setPokemonName] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [shinyImgUrl, setShinyImgUrl] = useState('')
    const [quantity, setQuantity] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()

        axios.post('/posts', {pokemonId, pokemonName, imgUrl, shinyImgUrl, quantity, userId}, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
                navigate('/Auth')
                console.log('worked?')
            })
            .catch(err => console.log(err))
    }

    return (
        <main>
            <form className='loginform' onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='pokemonId'
                    value={pokemonId}
                    onChange={e => setPokemonId(e.target.value)}
                    className='form-input add-post-input'
                />
                <textarea 
                    type='text'
                    placeholder='pokemonName'
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                    className='form-input add-post-input textarea'
                />
                <input
                    type='text'
                    placeholder='quantity'
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                
                />
              
               
                    <button className='form-btn'>submit</button>
            </form>
        </main>
    )
}

export default Form