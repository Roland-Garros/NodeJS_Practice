function hello(msg) {
    console.log('-----start-----')
    // javascript 에서 콜백함수를 받는 내장 함수
    // --> 지정된 시간만큼 대기 후 콜백함수를 호출한다.
    setTimeout(function () {
        console.log(msg)
    }, 1000)
    console.log('-----done-----')
}

hello('Hello Callback')

console.log('----- 프로그램을 종료합니다. -----')