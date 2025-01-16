import '../components/Results.css';

const Results = ({score,onRestart}) => {
    return (
        <div className="results">  
            <p>당신의 점수는?</p>
            <img src='./image/pngwing.com (2).png'></img>
            <div className="score">
            <p>{score}점 입니다!<br/>수고하셨어요</p>
            </div>
            <div className="button">
            <button onClick={(onRestart)}>다시 시작하기</button>
            </div>
        </div>
    );
};

export default Results;