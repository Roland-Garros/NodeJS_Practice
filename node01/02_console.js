/** 1) 형식문자의 사용 */
// --> %d : 정수, %s : 문자열, %j : JSON객체
var name = '학생'
var age = 20
var height = 175.5
// 형식문자에 치환할 변수를 콤마로 구분하여 전달한다.
console.log('%s은 %d세 이고, 키는 %d 입니다.', name, age, height)

/** 2) JSON 데이터 출력하기 */
var data = {
    name: '노드학생',
    age: 20,
    height: 175.5
}

// JSON 형식문자 사용
console.log('JSON 데이터 : %j', data)