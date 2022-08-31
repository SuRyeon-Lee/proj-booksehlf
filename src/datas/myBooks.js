import uuid from 'react-uuid'

const myBooks = [
    {
        id: uuid(),
        title: "월가의 영웅",
        author: "피터린치·존 로스차일드",
        category: "투자",
        coverColor: "#00B7AF",
        textColor: "#181617",
        height: "90%",
        thickness: "50px",
    },
    {
        id: uuid(),
        title: "클린코드",
        author: "로버트 C 마틴",
        category: "개발",
        coverColor: "#FF3011",
        textColor: "#fff",
        height: "80%",
        thickness: "120px",
    }
]

export default myBooks;