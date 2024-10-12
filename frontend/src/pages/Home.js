import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <img src='/images/cover.jpg' className='z-0 img-fluid' alt='coverImage' />
            <div
                className='z-1 position-absolute top-0 start-0 bottom-0 end-0'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            ></div>
            <div className='z-2 position-absolute top-50 start-50 translate-middle'>
                <h1 className='text-white'>Call a DISH, but not for me...</h1>
                <div className='text-center'>
                    <Link to='/food'>
                        <button type='button' className='btn btn-warning mt-2'>Eat something</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home; 
