/** 1) 수행시간 측정 시작하기 --> 시점 이름을 지정한다. */
console.time('duration-time')

/** 2) 메시지 출력하기 */
console.log('Hello NodeJS!!')

/** 3) 내장 전역변수 사용 */
// --> 출력시에 문장과 값의 결합은 "+" 사용
console.log('Current File Name : ' + __filename)
console.log('Current File Path : ' + __dirname)

/** 4) 측정시간 출력하기 */
// 출력결과는 6라인부터 이 지점까지
// 실행하는데 걸린 시간을 의미함
console.timeEnd('duration-time')