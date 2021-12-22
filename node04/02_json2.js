/** 복합적인 값을 갖는 JSON */
// 문자열, 숫자형, 배열을 값으로 갖는 형태
var company = {
    name: 'helloCompany',
    since: 2021,
    department: ['기획팀', '개발팀', '연구소']
}

// JSON 데이터에 접근하는 방법(점으로 연결 혹은 배열처럼 접근)
// 점을 통한 접근을 권장
console.log(company.name)
console.log(company['since'])
console.log(company.department[0])
console.log(company.department[1])
console.log(company['department'][2])
console.log("==============================")