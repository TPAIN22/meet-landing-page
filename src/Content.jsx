import Men from './assets/desktop/image-man-texting.jpg'
import MenM from './assets/desktop/image-men-in-meeting.jpg'
import Woman from './assets/desktop/image-woman-in-videocall.jpg'
import WomanC from './assets/desktop/image-women-videochatting.jpg'

function Content (){
    return(
        <div className='flex items-center justify-center gap-8 flex-col mt-12 red-hat-display'>
            <div className='col'>
            <img src={Woman} alt="image-woman-in-videocall" className='img'/>
            <img src={WomanC} alt="image-women-videochatting" className='img'/>
            <img src={MenM} alt="image-man-in-meeting" className='img'/>
            <img src={Men} alt="image-man-texting" className='img'/>
            </div>
            <div className='flex flex-col gap-4 max-h-60 max-w-xl mt-16 items-center justify-center text-center'>
                <h2 className='text-[var(--button1)] text-2xl'>BUILT FOR MODERN USE</h2>
                <h1 className='text-[var(--text-big)] text-5xl text-center font-bold'> Smartmeetings, all in one place</h1>
                <p className='text-[var(--text-small)] mt-6 text-xl text-center'>
                    Send messages, share files, show your screen, and record your meetings — all in one workspace. 
                    Control who can join with invite-only team access, data encryption, and data export.
                </p>
            </div>
            
            <div className='flex flex-col items-center mt-12'>
            <div className='bg'></div>
            <div className='bo px-5 py-4 text-xl'>02</div>
            </div>
        </div>
    );
}
export default Content