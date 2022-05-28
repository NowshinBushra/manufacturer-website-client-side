import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mt-16 ml-8 lg:ml-64 leading-9'>
            <h2 className='text-2xl font-bold uppercase mb-6 text-center'>My Portfolio</h2>
            <p><span className='font-bold'>Name: </span>Nowshin Islam Bushra</p>
            <p><span className='font-bold'>Email: </span>nowshin.bushra399@gmail.com</p>
            <p><span className='font-bold'>Education<small> (on progress) :</small></span> BSc in Electronics and Communication Engineering at Institute of Science and Technology</p>
            <div><span className='font-bold'>Skills / Technologies:</span>
                <p className='ml-6 leading-7'>
                    <li>HTML</li>
                    <li>CSS and CSS Frameworks</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Node.js</li>
                    <li>Database Technology: MongoDB</li>
                    <li>Git and GitHub</li>
                    <li>Python</li>
                    {/* <li>Basic UI / UX Design</li> */}
                    <li>C Programming</li>
                    <li>Microsoft Office</li>
                    <li>Microsoft Excel</li>
                    <li>Microsoft Word</li>
                </p>
            </div>
            <div><span className='font-bold'>My Websites: </span>
            <p className='ml-6'>
                <li><a className='text-blue-600' href=" https://manufacturer-website-fbeb0.web.app/ ">Bicycle Manufacturer</a></li>
                <li><a className='text-blue-600' href="https://vehico-mart-services.web.app/">Vehico Mart</a></li>
                <li><a className='text-blue-600' href=" https://dermatological-services.web.app/">Dermatological Service</a></li>
            </p>
            </div>
        </div>
    );
};

export default MyPortfolio;
