import Image from 'next/image'
import Qazi from '../static/qazi.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'
import Banner from './../static/banner.png'

const styles = {
    wrapper: `flex items-center justify-center flex-[3] border-l border-r bg-white text-black`,
    content: `h-screen overflow-scroll w-full p-[2rem]`,
    postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: `flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    column: `flex-1 flex flex-col justify-center`,
    postDetails: `flex gap-[.2rem] text-[#787878]`,
    listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
    socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
    space: `w-[.5rem]`,
    bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    image: 'object-cover',
    title: `font-bold text-3xl`,
    subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
    articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
}

const ArticleMain = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorProfileImageContainer}>
                            <Image 
                                className={`object-cover`}
                                src={Qazi}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={styles.column}>
                            <div>Ari Jaya</div>
                            <div className={styles.postDetails}>
                                <span>June 15 - 7 min read -</span><span className={styles.listenButton}>
                                    <AiFillPlayCircle /> Listen    
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <IoLogoTwitter />
                        <FaFacebook />
                        <GrLinkedin />
                        <HiOutlineLink />
                        <div className={styles.space}/>
                        <BiBookmarks />
                        <FiMoreHorizontal />
                    </div>
                </div>
                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerContainer}>
                        <Image 
                            className={styles.image}
                            src={Banner}
                            height={500}
                            width={500}
                        />
                    </div>
                    <h1 className={styles.title}>
                        7 Free Tools That Will Make You More Productive in 2022
                    </h1>
                    <h4 className={styles.subtitle}>
                        <div>Ari Jaya, June 15, 2022</div>
                        <div>Brief: Productivity is a skill that can be learned</div>
                    </h4>
                    <div className={styles.articleText}>
                        Hello, My name is Ari Jaya!, I'm a self-taught Developer. I love being productive everyday. I learned progarmming languages through made real-world project such as Documentation site, paper book, youtube social media and etc.
                        Because I love to think creative to learn critical concept and to solve the fundamental problem in the projects, and also learning from the mistakes to push forward  for the best perfomance in the future.
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default ArticleMain