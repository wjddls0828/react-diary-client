# react-diary-client

> 21-1 전산학특강 텀프로젝트

## 프로젝트 설명

> 하루의 기분과 함께 일상을 기록할 수 있는 나만의 다이어리를 만들어보자!

## 실행

```
$ yarn install
$ yarn dev

```

## 기술 스택

- boiler plate
  - NextJs
- Client
  - React
- Backend For Frontend Server
  - NodeJS, Express
- Client와 BFF 간 데이터 통신 - restful api
  - axios
- Continuous Integration
  - prettier
  - eslint
  - yarn (package manager)
- language
  - Typescript

## 구조

```
.
├─ README.md
├─ pages/
├─ server/
├─ share/
│      interfaces/
│      utils/
├─ views/
│      components/

```

- pages : 라우팅
- public : 이미지 파일 등 static file
- server : BFF api 연동 로직
- share : 공통 모듈, 인터페이스
- views : React 컴포넌트
  - components : 공통 React 컴포넌트
