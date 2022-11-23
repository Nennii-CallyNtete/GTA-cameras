import {React} from 'react';
import ContentContainer from '../components/ContentContainer';
import LogsContainer from '../components/LogsContainer';
import SearchBar from '../components/SearchBar';

const Dashboard = () => {
    return(
        <div className='mx-auto'>
            <div className='mx-auto w-screen flex'>
                <SearchBar />
            </div>
            <div className='flex flex-row flex-wrap-reverse w-screen place-content-between'>
                <ContentContainer />
                <LogsContainer />
            </div>
        </div>
    )
}

export default Dashboard;