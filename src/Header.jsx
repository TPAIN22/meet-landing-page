import Logoo from './assets/logo.svg'
import Left from './assets/desktop/image-hero-left.png'
import Right from './assets/desktop/image-hero-right.png'
import Tablet from './assets/tablet/image-hero.png'


function Header () {
    return(
        
        <div className='flex flex-col justify-center items-center w-full gap-14 mt-16 red-hat-display max-sm:gap-8 max-md:gap-8'>
            <img src={Logoo} alt="logo"/>
            <div className='flex items-center justify-center gap-16 max-lg:flex-col max-md:gap-1 max-sm:gap-1 '>
            <img src={Left} alt="people" className='black'/>
            <img src={Tablet} alt="people" className='disply'/>
                <div className='flex flex-col gap-10 items-center text-center mt-20 max-w-lg' >
                    <h1 className='text-7xl font-bold text-[var(--text-big)] '>Group Chat for Everyone</h1>
                    <p className='text-[var(--text-small)] text-xl '> Meet makes it easy to connect with others face-to-face virtually and collaborate across any device</p>
                    <div className='flex gap-4 color max-md:flex-col'>
                    <button className='text-xl bg-[var(--button1)] hover:bg-[var(--button3)] px-6 py-3 text-white rounded-full'>Download <span className='text-[var(--inside)] hover:text-[var(--button1)]'>v1.3</span></button>
                    <button className='text-xl bg-[var(--button2)] hover:bg-[var(--button4)] px-6 py-3 text-white rounded-full'>what is it?</button>
                    </div>
                </div>
                <img src={Right} alt="people" className='black'/>
            </div>
            <div className='flex flex-col items-center mt-14'>
            <div className='bg'>
            </div>
            <div className='bo px-5 py-4 text-xl'>01</div>
            </div>
        </div>
    );
}
export default Header