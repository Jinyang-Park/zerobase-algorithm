/**
 * @param orders {number[]}
 * @param n {number}
 * @returns {number}
 */
//문제풀이 1st 2번문제 NthCanceledOrder

function solution(orders, n) {
  let missCount = 0; // 1,2,3
  let num = 0; // 1,2,3,4,5,6
  let i = 0; // 1,2,3
  while (missCount !== n) {
    num++;

    if (orders[i] === num) {
      i++;
    } else {
      missCount++;
    }
  }
  return num;
}

orders = [2, 4, 5, 7];
n = 3;
console.log(solution(orders, n));

//1. missCount, num,i 모두 0으로 변수 선언, 0이라고 초기화하면 비교할때 큰 값 업데이트? n = 3 이라고 하자!
//2. missCount !== n --> 0 !== 3 --> true --> num++
//3. orders[i]= 0의 인덱스는 2,4,5,7  2다. 2 === 1 false --> missCount 1 증감
//4. 1 !== 3  true --> num++ --> 2 --> orders[i]= 0의 인덱스는 2,4,5,7  2다. 2 === 2 true  --> i++ 증감
//5. 1 !== 3  true --> num++ --> 3 --> orders[i]= 1의 인덱스는 2,4,5,7  4다. 4 === 3 false --> missCount 2증감
//6. 2 !== 3 true --> num++ --> 4 --> orders[i]= 1의 인덱스는 2,4,5,7  4다. 4 === 4 true --> i++ 증감
//7. 2 !== 3 true --> num++ --> 5 --> orders[i]= 2의 인덱스는 2,4,5,7 5다. 5 === 5 true --> i++ 증감
//8. 2 !== 3 true --> num++ --> 6 --> orders[i]= 3의 인덱스는 2,4,5,7 7다. 7 === 6 false --> missCount 3 증감
//9. 3 !== 3 false 이므로 while문 종료
//10. n = 3일때 취소된 주문번호는 6!

//문제풀이 1st 9문제 SecondLargestBinaryNumber

function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += getSecondLargestBitNumber(i);
  }
  return result;
}

function getSecondLargestBitNumber(n) {
  let max = 1 << 30;
  let count = 0;

  for (; max > 0; max >>= 1) {
    if (max & n) {
      if (count === 1) {
        count++;
        continue;
      }

      count++;
      n -= max;
    }
  }

  return n;
}

solution;

//문제풀이 2nd 4문제 SumOfNumber

//1. 1부터 하나씩 더한 수를 더해준다.
//2. 더한 수가 n이 되면 종료되고 cnt 적립한다.
//3. 더한 수가 n보다 크면 종료되고 다음으로 넘어간다.
function solution(n) {
  let answer = 0;
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      answer += j;
      if (answer === n) {
        cnt++;
        answer = 0;
        break;
      } else if (answer > n) {
        answer = 0;
        break;
      }
    }
  }
  return cnt;
}

example = [15, 8 + 7, 4 + 5 + 6, 1 + 2 + 3 + 4 + 5];
n = 15;

console.log(solution(n));
