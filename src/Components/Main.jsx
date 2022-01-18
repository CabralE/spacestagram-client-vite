import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaSpinner, FaThumbsUp } from 'react-icons/fa';

const Main = (props) => {
    // deconstructing prop
    const nasaInfo = props.nasaInfo
    
    const [isLiked, setIsLiked] = useState(false);
    
    const loaded = () => {
        return (
            <div className="container">
                <h2>{nasaInfo?.title}</h2>
                <img src={nasaInfo?.hdurl} alt="hdImage" className="image" />
                <div className="content-container">
                    <div className="content">
                        <div className='more-stuff'>
                            <span className={isLiked ? "heart":"no-heart"} onClick={() => setIsLiked(!isLiked)}><BsFillHeartFill />
                            </span>
                        </div>
                        <div>
                            <span>Taken by {nasaInfo?.copyright} on {nasaInfo?.date} </span>
                        </div>
                    </div>
                </div>
                <p>{nasaInfo?.explanation}</p>
            </div>
        )
    }

    const loading = () => {
        return (
            <>
                <h1>Loading API...</h1>
                <h2 className='spinner'><FaSpinner /></h2>
            </>
        )
    }

    return (
    <main>
        {props.nasaInfo ? loaded() : loading()}
    </main>

    )
}

export default Main