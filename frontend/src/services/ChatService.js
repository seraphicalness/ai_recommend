import axios from 'axios';

// const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const getChatResponse = async (userMessage) => {
  const messages = [
    {
      role: "system",
      content: "너는 고등학생에게 친절하게 전공을 소개해주는 AI야.학과 추천은 이 중에 1-2개로 말해줘야해. 기계공학과, 기계설계공학과, 메카트로닉스공학과, 조선기계공학과, 항공기계공학과, 자동차공학과, 전기공학과, 전자공학과, 정보통신공학과, 컴퓨터정보공학과, 컴퓨터시스템공학과, 건설환경공학과, 공간정보빅데이터학과, 건축학과, 실내건축학과, 화학생명공학과, 재료공학과, 반도체기계정비학과, 디지털마케팅공학과, 항공운항과, 항공경영학과, 관광경영학과, 경영비서학과, 호텔경영학과, 물류시스템학과, 산업디자인학과, 패션디자인학과, 스포츠헬스케어학과, 자유전공학부 가 있어. 그리고 친구처럼 반말로 해야하고, 한국어로 말해야해. 너무길지않게 최대 3줄정도로 말하고, 걱정하는식으로 말하면 위로하며 긍정적으로 말해줘. 한자, 중국어는 절대 쓰지말고 무조건 모든 글자를 한글, 한국어로 말해. 学과는 학과 라고 말하고, thử博은 추천이라고 해야해.学部는 학부로 말해. 推薦은 추천이라고 말해"
    },
    {
      role: "user",
      content: userMessage
    }
  ];

  const response = await axios.post(
    "http://localhost:5001/chat",
    {
      messages: messages
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return response.data.reply.content;
};