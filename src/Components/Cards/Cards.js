import './Cards.scss';

const Cards = () => {
    return (
        <>
            <div className='cardFlex'>
                <ul>
                    <li>
                        <div className='cards'>Card1</div>
                    </li>
                    <li>
                        <div className='cards'>Card2</div>
                    </li>
                    <li>
                        <div className='cards'>Card3</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Cards;