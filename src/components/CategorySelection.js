import '../components/CategorySelection.css';

const CategorySelection = ({categories,onCategorySelect}) => {
    return (
        <div className="category-selection">
            <div className='top'>
            <h1>"세계 햄스터의 날"</h1>
            <h2>햄스터에 대해 알아볼까요?</h2>
            </div>
            <div className="ham-1">
                <img src='./image/햄4.jpg'></img>
            </div>
            <div className="start">
                <p>:: QUIZ 주제를 선택해주세요 ::</p>
            </div>
            {/*1. 카테고리를 button으로 작성*/}
            <div className='sub'>
            {
                categories.map((txt,idx)=>{
                    return<button
                    key={idx}
                    onClick={()=>{onCategorySelect(txt)}}
                >{txt}</button>
            })
        }
        </div>
        <p>퀴즈를 통해 햄스터의 습성에 대하여 알아보아요</p>
        </div>
    );
};
export default CategorySelection;