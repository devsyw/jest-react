/**
 * jest-changed-files
 * git/hg 저장소에서 수정된 파일을 식별하기 위한 도구
 * @return getChangedFilesForRoots: 변경된 파일 및 저장소가 있는 객체 반환
 * @return findRepos: 지정된 경로에 포함된 저장소 집합 객체 반환
 */
const {getChangedFilesForRoots} = require('jest-changed-files');
test('현재 repo 에서 마지막 커밋 이후 수정된 파일들을 출력', async() => {
    await getChangedFilesForRoots(['./'], {
        lastCommit: true,
    }).then(result => console.log(result.changedFiles));
})


/**
 * jest-diff
 * 모든 유형의 두 값을 비교하고 두 인수 간의 차이점을 설명하는
 * pretty(정렬된) 문자열을 반환하는 함수
 */
const {diff} = require('jest-diff');
test('데이터의 변화를 시각화하기 위한 도구', () => {
    const a = {a: {b: {c: 5}}};
    const b = {a: {b: {c: 6}}};
    const result = diff(a, b);
    console.log(result);
})


/**
 * jest-docblock
 * 주석 블록 내부의 데이터를 조작하기 위해 다양한 기능을 내보냄
 */
const {parseWithComments} = require('jest-docblock');
test('JavaScript 파일의 맨 위에 있는 주석을 추출하고 구문 분석하기 위한 도구', () => {
    const code = `
    /**
     * This is a sample
     *
     * @flow
     */
    
     console.log('Hello World!');
    `;
    const parsed = parseWithComments(code);
    // comments 및 pragmas의 두 가지 속성을 가진 개체 출력
    console.log(parsed);
})


/**
 * jest-get-type
 * JavaScript 값의 기본 유형을 식별하는 모듈
 */
test('인수로 전달된 값의 유형이 있는 문자열을 반환함', () => {
    const {getType} = require('jest-get-type');
    const array = [1, 2, 3];
    const nullValue = null;
    const undefinedValue = undefined;
    // prints 'array'
    console.log(getType(array));
    // prints 'null'
    console.log(getType(nullValue));
    // prints 'undefined'
    console.log(getType(undefinedValue));
})


/**
 * jest-validate
 *  hasDeprecationWarnings: 제출된 구성에 지원 중단 경고가 있는지 여부를 나타내는 boolean
 *  isValid: 구성이 올바른지 여부를 나타내는 boolean
 */
const {validate} = require('jest-validate');
test('사용자가 제출한 구성을 검증하기 위한 도구', () => {
    const configByUser = {
        transform: '<rootDir>/node_modules/my-custom-transform',
    };

    const result = validate(configByUser, {
        comment: '  Documentation: http://custom-docs.com',
        exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},
    });

    console.log(result);
})


/**
 * pretty-format
 * JavaScript 값을 사람이 읽을 수 있는 문자열로 변환하는 함수
 * 즉시 사용 가능한 모든 내장 JavaScript 유형을 지원하고 
 * 사용자 정의 플러그인을 통해 애플리케이션별 유형에 대한 확장을 허용
 */
const {format: prettyFormat} = require('pretty-format');
test('', () => {
    const val = {object: {}};
    val.circularReference = val;
    val[Symbol('foo')] = 'foo';
    val.map = new Map([['prop', 'value']]);
    val.array = [-0, Infinity, NaN];

    console.log(prettyFormat(val));
})