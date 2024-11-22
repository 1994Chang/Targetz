import React from 'react';
import facebook from '../../Asset/Facebook.png';

const FooterSection = () => {
    const navigation = [
        { name: 'Facebook',src:'/Facebook.png', href: '#' },
        { name: 'Instagram', src:'/Instagram.png', href: '#' },
        { name: 'Linkedin', src:'/Linkedin.png', href: '#' },
        { name: 'WhattsApp', src:'/WhattsApp.png', href: '#' },

      ]
  return (
    <section className="relative z-10 overflow-hidden bg-white py-10 dark:bg-dark lg:py-[40px]">
        <div className="bg-white">
            <footer className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Targetz</span>
                            <img
                                alt=""
                                src='/targetz_Logo.png'
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex">
                        <span className="text-base text-body-color dark:text-dark-6">Copyright © 2024 
                         <a href="#" className="text-sm/6 font-semibold text-blue-600"> 
                        Targetz 
                        </a>
                        , Made with ❤️ </span>
                    </div>
                    
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                        </a> */}
                        <div className="hidden lg:flex lg:gap-x-6">
                        {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                            <img src={item.src} className="h-6 w-auto" alt={item.name}/>
                        </a>
                        ))}
                    </div>
                    </div>
                </nav>
            </footer>
        </div>
    </section>
  )
}

export default FooterSection