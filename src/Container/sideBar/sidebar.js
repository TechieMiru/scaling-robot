import React from 'react'

function SideBar() {
    return (
        <div class=" sm:float-left sm:w-1/4 sm:h-screen sm:bg-black-400 border-r-2  border-gray-300 sm:rounded-2xl sm:shadow-md ">
            <div class=" sm:flex sm:flex-wrap p-7 content-start justify-center h-1/5 sm:bg-green-600 sm:rounded-2xl sm:rounded-b-none sm:rounded-l-none">
                <svg className="w-8 h-8 my-icon">       
                    <image className="w-8 h-8" xlinkHref="/images/svg/hamburger.svg" src="test.svg"/>    
                </svg>
            </div>
            <div className=" sm:bg-blue-600 space-y-9 h-3/5 pt-7">
                <div class=" flex justify-center">
                    <svg className="w-8 h-8">       
                        <image className="w-8 h-8" xlinkHref="/images/svg/user.svg" src="tesddt.svg"/>    
                    </svg>
                </div>
                <div class=" flex justify-center">
                    <svg className="w-8 h-8">       
                        <image className="w-8 h-8" xlinkHref="/images/svg/contact.svg" src="tesddt.svg"/>    
                    </svg>
                </div>
                <div class=" flex justify-center">
                    <svg className="w-8 h-8">       
                        <image className="w-8 h-8" xlinkHref="/images/svg/projects.svg" src="test.svg"/>    
                    </svg>
                </div>
                <div class=" flex justify-center">
                    <svg className="w-8 h-8">       
                        <image className="w-8 h-8" xlinkHref="/images/svg/skills.svg" src="test.svg"/>    
                    </svg>
                </div>
                <div class=" flex justify-center">
                    <svg className="w-8 h-8">       
                        <image className="w-8 h-8" xlinkHref="/images/svg/workexpirience.svg" src="test.svg"/>    
                    </svg>
                </div>
            </div>
        <div class="flex flex-wrap content-end justify-center pb-7 h-1/5 sm:bg-green-600 lg:bg-red-600 sm:rounded-2xl sm:rounded-t-none sm:rounded-l-none">
            <svg className="w-8 h-8">       
                <image className="w-8 h-8" xlinkHref="/images/svg/downloadcv.svg" src="test.svg"/>    
            </svg>
        </div>
      </div>



            // <div className=" pt-10">
            //     <div className=" pb-5">
            //         <img src ="/images/svg/logo192.png"></img>
            //     </div>
            // </div>
            // <div>
            //     <div className=" pb-5">
            //         <img src ="/images/svg/logo192.png"></img>
            //     </div>
            // </div>
            // <div>
            //     <div className=" pb-5">
            //         <img src ="/images/svg/logo192.png"></img>
            //     </div>
            // </div>
            // <div>
            //     <div className=" pb-5">
            //         <img src ="/images/svg/logo192.png"></img>
            //     </div>
            // </div>
            // <div className="pb-10">
            //     <div className=" pb-5">
            //         <img src ="/images/svg/logo192.png"></img>
            //     </div>
            // </div> 
    )
};
const Item = () => {
    const [size, setSize] = React.useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };
    React.useEffect(() => {
        window.addEventListener('resize',checkSize)
        return () => {
            window.removeEventListener('resize',checkSize);
        }
    }, [])
    return <div>
        <h1>Window</h1>
        <h1>Size : {size}</h1>
    </div>
}

export default SideBar
