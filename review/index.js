// https://getcssscan.com/css-box-shadow-examples

// 유저에게 그리드 갯수를 물어보고, 그 갯수에 따라서
// A-Z 까지 각각 내용이 담긴 BOX 나열하기

// // 유저에게 그리드 갯수 입력받기
// const count = parseInt(prompt("그리드 갯수를 입력하세요"), 10);

// // 알파벳 배열 생성
// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// // 그리드 컨테이너 생성
// const container = document.createElement('div');
// container.classList.add('grid-container');

// // 그리드 갯수만큼 박스 생성
// for (let i = 0; i < count; i++) {
//     const div = document.createElement('div');
//     div.classList.add('grid-item');
//     div.innerText = alphabet[i % alphabet.length]; // A-Z 반복
//     container.appendChild(div);
// }

// // 그리드 컨테이너를 body에 추가
// document.body.appendChild(container);

const column = Number(prompt("그리드 갯수"));

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;

// A-Z 까지 각각 내용이 담긴 BOX 나열하기
[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].forEach((x)=>{
    const box = document.createElement("div");
    box.style.boxShadow = `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`;
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.padding = "20px";
    box.innerText = x;
    container.appendChild(box);
});

document.body.appendChild(container);