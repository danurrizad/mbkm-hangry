import React from 'react'
import { FaArrowRight, FaCircle, FaCheck  } from "react-icons/fa";

const Home = () => {
    const FoodData = [
        {
            img: '/img/Image-Food-1.png',
            logoImg: '/img/Logo-Image-Food-1.png',
            alt:'ayam-koplo',
            title: 'Ayam Koplo',
            subtitle: 'Ayam Geprek',
            country: 'Indonesia',
        },
        {
            img: '/img/Image-Food-2.png',
            logoImg: '/img/Logo-Image-Food-2.png',
            alt:'san-gyu',
            title: 'San Gyu',
            subtitle: 'Beef Bowl',
            country: 'Jepang',
        },
        {
            img: '/img/Image-Food-3.png',
            logoImg: '/img/Logo-Image-Food-3.png',
            alt:'bude-sari',
            title: 'Bude Sari',
            subtitle: 'Nasi Ayam',
            country: 'Indonesia',
        },

    ]
  return (
    <>
        <div className='min-h-screen'>
            {/* Banner */}
            <section id='download' className='2xl:px-40 xl:px-32 lg:px-28 md:px-20 sm:pl-4 pl-4 2xl:pt-40 xl:pt-32 lg:pt-28 md:pt-24 sm:pt-32 pt-32 bg-primary1 grid grid-cols-2 items-center 2xl:gap-40 xl:gap-36 lg:gap-32 md:gap-28'>
                <div className=''>
                    <h2 className='text-text2 font-bold 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px]'>Kamu laper atau haus?</h2>
                    <h1 className='text-text1 font-bold 2xl:text-[40px] xl:text-[34px] lg:text-[28px] text-[24px]'>Tenang... ada Hangry! yang siap mengatasi</h1>
                    <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col 2xl:w-full xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-1/3 w-2/3 justify-start 2xl:gap-10 xl:gap-8 lg:gap-6 gap-2 pt-10'>
                        <a href='https://play.google.com/store/apps/details?id=com.modular.ishangry&hl=en&gl=US&pli=1'><img src="/img/Button-Playstore.png" alt="button-playstore" /></a>
                        <a href='https://apps.apple.com/id/app/hangry/id1498223490'><img src="/img/Button-Appstore.png" alt="button-appstore" /></a>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='overflow-hidden 2xl:h-[60vh] xl:h-[55vh] lg:h-[50vh] md:h-[45vh] h-[320px]'>
                        <img className=' object-cover 2xl:h-fit xl:h-[600px] lg:h-[500px] md:h-[300px] h-[400px] 2xl:ml-0 ml-12' src="/img/Iphone-App.png" alt="iphone-app" />
                    </div>
                </div>
                
            </section>

            {/* Restoran beragam Brand */}
            <section id="about" className='2xl:px-40 xl:px-32 lg:px-28 md:px-20 sm:px-4 px-4 pt-32'>
                <div>
                    <h1 className=' text-text1 font-bold 2xl:text-[40px] xl:text-[34px] lg:text-[28px] text-[24px]'>Hangry! adalah restoran dengan beragam brand</h1>
                    <h1 className='text-text2 2xl:text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[16px] '>Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</h1>
                </div>
                <div className='flex justify-between gap-10 pt-8 z-0 2xl:flex-nowrap flex-wrap gap-x-0'>
                    {FoodData.map((data,index)=>(
                        <div className='relative' key={index}>
                            <a href=''>
                                <img className="absolute 2xl:w-[70px] xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[40px] bg-white 2xl:p-3 xl:p-3 lg:p-3 md:p-2 sm:p-1 p-1 rounded-full 2xl:top-4 xl:top-4 lg:top-4 md:top-4 sm:top-2 top-2 2xl:left-4 xl:left-4 lg:left-4 md:left-4 sm:left-2 left-2" src={data.logoImg} alt={data.alt} />
                                <img className='2xl:w-full xl:w-[300px] lg:w-[260px] md:w-[200px] w-[170px] bg-black rounded-[16px]' src={data.img} alt={data.alt} />
                            </a> 
                            <a href='' className='flex items-center gap-4 w-fit mt-4'>
                                <h1 className='text-text1 font-bold 2xl:text-[32px] xl:text-[26px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[14px]'>{data.title}</h1>
                                <FaArrowRight className='text-text4 2xl:text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] text-[10px]'/>
                            </a>
                            <div className='flex items-center gap-2 text-text2 2xl:text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px] text-[10px]'>
                                <h1>{data.subtitle}</h1>
                                <FaCircle className='text-[4px]'/>
                                <h1>{data.country}</h1>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </section>

            {/* Temukan Hangry! di platform */}
            <section id='outlet' className='2xl:px-40 xl:px-32 lg:px-28 md:px-20 sm:px-4 px-4 pt-20 '>
                <h1 className='text-center text-text3 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[12px] sm:text-[10px] text-[10px] 2xl:pb-10 xl:pb-10 lg:pb-10 md:pb-10 sm:pb-4 pb-4'>Hangry! dapat kamu temukan di</h1>
                <div className='flex justify-between items-center 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 sm:gap-1 gap-1'>
                    <img className='2xl:w-[180px] xl:w-[160px] lg:w-[140px] md:w-[100px] sm:w-[70px] w-[70px] h-full' src="/img/GoFood.png" alt="" />
                    <img className='2xl:w-[180px] xl:w-[160px] lg:w-[140px] md:w-[100px] sm:w-[70px] w-[70px] h-full' src="/img/GrabFood.png" alt="" />
                    <img className='2xl:w-[180px] xl:w-[160px] lg:w-[140px] md:w-[100px] sm:w-[70px] w-[70px] h-full' src="/img/Zomato.png" alt="" />
                    <img className='2xl:w-[180px] xl:w-[160px] lg:w-[140px] md:w-[100px] sm:w-[70px] w-[70px] h-full' src="/img/Eats.png" alt="" />
                </div>
            </section>

            {/* Makin Rame, Makin Hemat */}
            <section id='promo' className='2xl:px-40 xl:px-32 lg:px-28 md:px-20 sm:px-4 px-4 2xl:py-40 xl:py-40 lg:py-40 md:py-40 sm:py-10 py-10 '>
                <div className='2xl:grid xl:grid lg:grid md:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 flex flex-col-reverse justify-between pt-6 gap-10'>
                    <section className='flex flex-col 2xl:gap-6 xl:gap-5 lg:gap-4 md:gap-4 gap-4 2xl:text-[24px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[16px]'>
                        <h1 className='text-text1 2xl:text-[40px] xl:text-[34px] lg:text-[28px] text-[24px] font-bold'>Makin Rame, makin hemat!</h1>
                        <p className='text-text2'>Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja. Cocok untuk hidangan segala acara!</p>
                        <div className='flex gap-4 items-center'>
                            <FaCheck className='text-text4'/>
                            <h2 className='font-bold text-text1 '>Beragam Pilihan Menu</h2>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FaCheck className='text-text4'/>
                            <h2 className='font-bold text-text1 '>Semua Menu Diskon 20%</h2>
                        </div>
                        <div className='flex gap-4 items-start'>
                            <FaCheck className='text-text4 mt-1.5'/>
                            <div>
                                <h2 className='font-bold text-text1 '>Gratis Biaya Kirim</h2>
                                <h2 className='text-text2 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] text-[12px]'>*Syarat & ketentuan berlaku</h2>
                            </div>
                        </div>
                        <button className='hover:bg-red-900 bg-text4 text-white px-5 py-3 rounded-[10px] 2xl:w-fit xl:w-fit lg:w-fit md:w-fit'>Pesan Sekarang</button>
                    </section>
                    <div className='justify-end flex'>
                        <img className='rounded-[16px] w-full h-fit' src="/img/Image-MakinRame.png" alt="" />
                    </div>
                </div>
            </section>
        </div>   
    </>
  )
}

export default Home