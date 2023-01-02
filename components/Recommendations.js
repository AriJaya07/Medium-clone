import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../static/replit.png'
import TutorialImg from '../static/tutorial.jpg'
import CPLogo from '../static/cp.png'
import Qazi from '../static/qazi.jpg'
import JSLogo from '../static/jsLogo.png'

const styles = {
    wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] bg-w bg-white`,

    accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,

    searchBar: `text-black flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,

    searchInput: `bg-white border-none outline-none w-full`,
    authorContainer: `my-[2rem]`,
    authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
    authorName: `text-black font-semibold mb-[.2rem] mt-[1rem]`,
    authorFollowing: `text-[#787878]`,
    authorActions: `text-black flex gap-[.6rem] my-[1rem]`,
    actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem text-sm`,
    recommendationContainer: `text-black`,
    recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    recommendationAuthorName: `text-sm`,
    recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
    recommendationTitle: `font-bold`,
    recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
    recommendationThumbnail: `object-cover`,
    articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
    articleContent: `flex-[4]`
}

const Recommendations = ({ author }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.accentedButton}>Get unlimited access</div>
            <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input
                    className={styles.searchInput}
                    placeholder='Search'
                    type='text'
                />
            </div>
            <div className={styles.authorContainer}>
                <div className={styles.authorProfileImageContainer}>
                    <Image 
                        src={Qazi}
                        width={100}
                        height={100}
                    />
                </div>
                <div className={styles.authorName}>Ari Jaya</div>
                <div className={styles.authorFollowing}>1M followers</div>
                <div className={styles.authorActions}>
                    <button className={styles.actionButton}>Follow</button>
                    <button className={styles.actionButton}><MdMarkEmailUnread /></button>
                </div>
                <div className={styles.recommendationContainer}>
                    <div className={styles.title}>More from Medium</div>
                    <div className={styles.articlesContainer}>

                        {recommendedPosts.map(post => (
                        <div className={styles.articleContentWrapper}>
                            <div className={styles.articleContent}>

                                <div className={styles.recommendationAuthorContainer}>
                                    <div className={styles.recommendationAuthorProfileImageContainer}>
                                        <Image src={post.image} height={100} width={100} />
                                    </div>
                                    <div className={styles.recommendationAuthorName}>{post.author.name}</div>
                                </div>    
                                <div className={styles.recommendationTitle}>{post.title}</div>
                            </div>
                            
                            <div className={styles.recommendationThumbnailContainer}>
                                <Image
                                className={styles.recommendationThumbnail}
                                src={post.image} height={100} width={100} />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendations

const recommendedPosts = [
    {
        title: 'What can you do with Replit?',
        image: TutorialImg,
        author: {
            name: 'Jaya Kusuma',
            image: CPLogo
        }
    },
    {
        title: 'What can you do with Replit?',
        image: ReplitLogo,
        author: {
            name: 'Ari Jaya',
            image: CPLogo
        }
    },
    {
        title: 'What can you do with Replit?',
        image: JSLogo,
        author: {
            name: 'Jaya Kusuma',
            image: CPLogo
        }
    },
]