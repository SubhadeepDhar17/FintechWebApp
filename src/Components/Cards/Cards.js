import './Cards.scss';
import polygon from '../../images/polygon.png';
import bill from '../../images/bill.png';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <>
            <div className='cardFlex'>
                <ul>
                    <li><Link to='/'>
                            <div className='cards card1'>
                                <li><img src={polygon} /></li>
                                <li className='cardBox1'>
                                    <h3>Total Amount</h3>
                                    <h1>520K USD</h1>
                                </li>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className='cards card2'>
                            <li><img src={bill} /></li>
                            <li className='cardBox1'>
                                <h3>Total Amount</h3>
                                <p>Total Amount</p>
                                <h1>300 USD</h1>
                            </li>
                        </div>
                    </li>
                    <li>
                        <div className='cards card3'>
                        <li><img src={bill} /></li>
                            <li className='cardBox1'>
                                <h3>Last Cycle</h3>
                                <p>May '23</p>
                                <h1>1.2K USD</h1>
                            </li>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Cards;