import { TiLocation } from 'react-icons/ti';
import './Header.css'
import { HiPhone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

const TopHeader = () => {
    return (
        <div className='lg:flex hidden justify-between items-center py-3'>
            <div className='w-auto'>
                <div className='flex items-center gap-2'>
                <TiLocation className='text-white size-5' />
                <p className='text-white tracking-wider'>2774 Oak Drive, Plattsburgh, New York</p>
                </div>
            </div>
            <div className="w-auto">
                 <div className='flex gap-5'>

                    <div className="flex gap-2 items-center">
                    <HiPhone className='text-[#fff] size-5'  />
                    <a className='text-[#fff] tracking-wider' href="tel:5185643200">5185643200</a>
                    </div>

                    <div className="flex gap-2 items-center">
                    <MdEmail className='text-[#fff] size-5'/>   
                    <a className='text-[#fff] tracking-wider' href="mailto:tecbolt@example.com">tecbolt@example.com</a>
                    </div>

                 </div>
            </div>
        </div>
    );
};

export default TopHeader;