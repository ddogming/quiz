const quizData = {
  categories: ["햄스터 관리", "햄스터 건강", "햄스터 번식", "햄스터 행동"],
  quizzes: [
    // 햄스터 관리 카테고리
    {
      id: 1,
      category: "햄스터 관리",
      difficulty: "쉬움",
      question: "햄스터를 키울 때 중요한 점은 무엇인가요?",
      choices: ["넓은 공간", "다양한 장난감", "적절한 온도와 습도", "모든 선택이 맞다"],
      correct: "모든 선택이 맞다"
    },
    {
      id: 2,
      category: "햄스터 관리",
      difficulty: "보통",
      question: "햄스터의 먹이를 주는 가장 좋은 시간은 언제인가요?",
      choices: ["아침", "점심", "저녁", "밤"],
      correct: "저녁"
    },
    {
      id: 3,
      category: "햄스터 관리",
      difficulty: "어려움",
      question: "햄스터가 스트레스를 받을 수 있는 이유는 무엇인가요?",
      choices: ["좁은 우리", "과도한 소음", "혼자 있는 시간", "모든 선택이 맞다"],
      correct: "모든 선택이 맞다"
    },

    // 햄스터 건강 카테고리
    {
      id: 4,
      category: "햄스터 건강",
      difficulty: "쉬움",
      question: "햄스터의 건강을 유지하려면 무엇이 가장 중요한가요?",
      choices: ["적절한 먹이", "깨끗한 우리", "규칙적인 운동", "모두 해당"],
      correct: "모두 해당"
    },
    {
      id: 5,
      category: "햄스터 건강",
      difficulty: "보통",
      question: "햄스터가 탈수 증세를 보일 때 해야 할 일은 무엇인가요?",
      choices: ["음수기를 새로 설치한다", "따뜻한 물을 주기 시작한다", "먹이를 적게 준다", "휴식을 취하게 한다"],
      correct: "음수기를 새로 설치한다"
    },
    {
      id: 6,
      category: "햄스터 건강",
      difficulty: "어려움",
      question: "햄스터의 피부 질환을 예방하려면 어떤 조치를 취해야 하나요?",
      choices: ["정기적인 목욕", "깨끗한 환경 유지", "비타민 보충", "과도한 운동"],
      correct: "깨끗한 환경 유지"
    },

    // 햄스터 번식 카테고리
    {
      id: 7,
      category: "햄스터 번식",
      difficulty: "쉬움",
      question: "햄스터는 몇 개월에 한 번씩 번식을 하나요?",
      choices: ["1개월", "3개월", "6개월", "12개월"],
      correct: "3개월"
    },
    {
      id: 8,
      category: "햄스터 번식",
      difficulty: "보통",
      question: "햄스터의 임신 기간은 평균적으로 얼마인가요?",
      choices: ["2주", "3주", "4주", "5주"],
      correct: "3주"
    },
    {
      id: 9,
      category: "햄스터 번식",
      difficulty: "어려움",
      question: "햄스터의 새끼는 태어날 때 어떤 상태인가요?",
      choices: ["눈을 뜬 채로 태어난다", "털이 있다", "몸집이 크다", "눈을 감고 태어난다"],
      correct: "눈을 감고 태어난다"
    },

    // 햄스터 행동 카테고리
    {
      id: 10,
      category: "햄스터 행동",
      difficulty: "쉬움",
      question: "햄스터가 저녁 시간에 활동적인 이유는 무엇인가요?",
      choices: ["야행성 동물이기 때문", "오전 시간 동안 잠을 자야 하기 때문", "먹이를 찾기 위해서", "온도가 높기 때문"],
      correct: "야행성 동물이기 때문"
    },
    {
      id: 11,
      category: "햄스터 행동",
      difficulty: "보통",
      question: "햄스터가 터널이나 숨을 곳을 자주 찾는 이유는 무엇인가요?",
      choices: ["스트레스를 받기 때문", "자신의 영역을 방어하기 위해서", "더운 곳을 피하려고", "배고프기 때문"],
      correct: "자신의 영역을 방어하기 위해서"
    },
    {
      id: 12,
      category: "햄스터 행동",
      difficulty: "어려움",
      question: "햄스터가 계속 같은 자리에 앉아있는 경우 무엇을 의심해야 하나요?",
      choices: ["피로", "배고픔", "병에 걸렸을 가능성", "심리적 안정"] ,
      correct: "병에 걸렸을 가능성"
    }
  ]
};

export default quizData;
