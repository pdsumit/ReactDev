import { useContext } from 'react'
import WatchListContext from '../Store/WatchList-Context'
import WatchListItem from '../Components/WatchListItem';

const WatchList = () => {

    const { watchList } = useContext(WatchListContext);

    return (
        <div className='my-10'>
            {
                watchList.map((item, idx) => {
                    return <WatchListItem key={idx} movie={ item } />
                })
            }
        </div>
    )
}

export default WatchList