import React, { useEffect, useState } from 'react';


const AwesomeServices = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch("/servicesData.json")
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, []);
   
    console.log(servicesData);
    
    // console.log(servicesData);
    
   
    
    return (
        <div className='w-full py-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    servicesData?.map((data, i) => (
                        <div key={i} className='w-full flex items-stretch'>
                            <div className='w-20 h-20 rounded-lg bg-blue-700 flex justify-center items-center'>
                                <img src={data?.icon} />
                            </div>
                              
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AwesomeServices;