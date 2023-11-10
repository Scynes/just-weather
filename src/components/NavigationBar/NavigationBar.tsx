import logo from '@assets/logo.svg';
import SearchBar from '@components/SearchBar';

export default () => {

    return (
        <nav className='flex gap-5 width-full'>
            <div className='flex align-center gap-1'>
                <div className='logo-container'>
                    <img className='width-full' src={ logo } alt="application logo" />
                </div>
                <h1>JUST WEATHER</h1>
            </div>
            <SearchBar />
        </nav>
    );
}