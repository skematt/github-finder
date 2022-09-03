import React from 'react';

function About(props) {
    return (
        <div>
            <h1 className={'text-6xl mb-4'}>Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. This is a project that is part of a bigger React course, courtesy of Brad Traversy,
                <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
                    {' '}
                    React Front To Back
                </a>{' '}
                .
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
                Layout By:
                <a className='text-white' href='https://twitter.com/hassibmoddasser'>
                    Hassib Moddasser
                </a>
            </p>
        </div>
    );
}

export default About;