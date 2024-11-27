import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Services = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Services"
    }, []);

    const ourServicesCard = [
        {
            title: "Initiation & Planning",
            content: "We are architects innovation trailblazers of technological advancement",
            img:"/assets/services1.svg"
        },

        {
            title: "Execution & Development",
            content: "We are architects innovation trailblazers of technological advancement",
            img:"/assets/services2.svg"
        },

        {
            title: "Testing & Maintenance",
            content: "We are architects innovation trailblazers of technological advancement",
            img:"/assets/services3.svg"
        },
    ]
    return (
        <div className='w-full'>
              <div  className='w-full pt-[100px] bg-[url("/assets/breadcrumb.png")] sm:pt-[150px] lg:pt-[230px] pb-[150px]'>
        <div className='text-center'>
            <div>
             <h1 className=" text-7xl lg:text-8xl text-white font-bold tracking-wide">Our Services</h1>
            </div>
            <div className='flex justify-center items-center pt-5'>
                <Link className='text-slate-300 tracking-wider' to={"/"}>Home</Link>
                <IoIosArrowForward className='text-white size-5'/>
                <p className='text-white tracking-wider'>Our Services</p>
            </div>
        </div>
         </div>
            

        <div className="container lg:px-[100px] mx-auto px-[1%] py-5">
        <h1 className='text-6xl font-bold text-blue-950 text-center mx-auto w-[80%] lg:w-[60%] pt-[100px] pb-5'>Our working process on how to grow your business</h1>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-24'>
                    {
                        ourServicesCard?.map((data, i) => (
                            <div className='w-full' key={i}>
                                <img className='w-[300px] h-[300px] object-contain mx-auto' src={data?.img} alt={data?.title} />

                                <h4 className='text-2xl font-semibold text-blue-900 text-center pt-5'>{data?.title}</h4>
                                
                                <p className='text-center pt-2 pb-3 text-md text-slate-500'>{data?.content }</p>
                            </div>
                            
                    ))}
                </div>


                <h1 className='text-6xl font-bold text-blue-950 text-center mx-auto w-[80%] lg:w-[60%] pt-[100px] pb-5'>Our awesome services to give you success</h1>
            </div>
        </div>
    );
};

export default Services;