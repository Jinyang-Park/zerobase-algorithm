// Fisher–Yates Shuffle 알고리즘을 활용한 배열 무작위 섞기 기능
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function assignNumber(n) {
  // 깃 이메일
  let gitEmail = [
    { "ggus1230@naver.com": [] },
    { "dev.peter.lim@gmail.com": [] },
    { "dldmscks1541@naver.com": [] },
    { "dbsskdud60@gmail.com": [] },
    { "younm9569@naver.com": [] },
    { "pgunoya@gmail.com": [] },
    { "inthegarden442@gmail.com": [] },
  ];

  // 현재 gitEmail 배열의 순서는 ggus가 첫 번째, inthe가 일곱 번째
  // 위에서 정의한 shuffle 함수를 호출해 이메일의 순서를 섞고 randomGitEmail에 아래의 형태로 저장

  // let gitEmail = {
  //   "ggus1230@naver.com": [],
  //   "dev.peter.lim@gmail.com": [],
  //   "dldmscks1541@naver.com": [],
  //   "dbsskdud60@gmail.com": [],
  //   "younm9569@naver.com": [],
  //   "pgunoya@gmail.com": [],
  //   "inthegarden442@gmail.com": [],
  // };

  let randomGitEmail = Object.assign({}, ...shuffle(gitEmail));

  // 풀어야 할 문제의 숫자 n을 numberArray에 순서대로 저장
  // 만약 n == 5 일 경우, numberArray = [1,2,3,4,5]
  let numberArray = Array(n)
    .fill(1)
    .map((x, y) => x + y);

  // 위에서 저장한 numberArray를 다시한번 shuffle 함수를 호출해 무작위 순서로 섞어서 저장
  let randomNumber = shuffle(numberArray);

  // 재귀함수
  function valuePush(i = 0) {
    // 모든 문제가 배정되면 함수 return
    if (randomNumber.length == 0) {
      return;
    }
    if (i == 7) {
      i = 0;
    }
    // 현재 randomNumber 배열에 에는 n개의 숫자가 랜덤으로 저장되어있음
    // randomNumber 에서 숫자를 하나씩 pop()
    let questionNumber = randomNumber.pop();
    // pop() 된 숫자를 randomGitEmail 객체 프로퍼티의 빈 배열 값에 하나씩 저장
    Object.values(randomGitEmail)[i].push(questionNumber);
    // 재귀함수를 통해 이 과정을 반복
    valuePush(i + 1);
  }

  valuePush();

  return gitEmail;
}

console.log(assignNumber(22));
