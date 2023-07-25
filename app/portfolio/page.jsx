import Folio from '@/components/Folio';
import styles from './portfolio..module.css'

const dataList = [
    {id:1, title:'프로젝트1', imgurl:'/images/folio/img01.jpg', desc:'내용1'},
    {id:2, title:'프로젝트2', imgurl:'/images/folio/img02.jpg', desc:'내용2'},
    {id:3, title:'프로젝트3', imgurl:'/images/folio/img03.jpg', desc:'내용3'}
]
const Portfolio = () => {
    return (
        <section id='container' className={styles.Portfolio}>
            <div className="inner">
                <h2>portfolio</h2>
                <div className={styles.list}>
                    {
                        dataList.map(item => <Folio key={item.id} {...item}/>)
                                                                //통째로 전달하는 게 아니라 안에거 그대로 전달
                                                                //받을 때: {item}이 아니라 {id, title, imgurl}로 받으면 됨
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;