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

## 기능
### (1) 일기 CRUD
#### ① 일기 쓰기
일기 글을 작성하고 저장할 수 있습니다. 글 내용을 에디터에서 작성하고, 오늘의 기분을 선택할 수 있습니다. 

![image](https://user-images.githubusercontent.com/44095036/122753064-aa76b600-d2cc-11eb-9497-cdd97e90123e.png)
- draft.js 에디터
- 글감 검색 기능: Naver 책 검색 API 활용
  - 책 검색하기
  
  ![image](https://user-images.githubusercontent.com/44095036/122751934-54edd980-d2cb-11eb-864c-f3271d691041.png)
  - 검색한 글감(책) 본문에 추가하기
  
  ![image](https://user-images.githubusercontent.com/44095036/122752037-6fc04e00-d2cb-11eb-9aca-51e636f44cbd.png)

#### ② 일기 보기
내가 작성한 일기 글의 내용을 확인할 수 있습니다.

![image](https://user-images.githubusercontent.com/44095036/122752410-e3faf180-d2cb-11eb-9bb0-51e0f554a173.png)

#### ③ 일기 목록보기
내가 작성한 글들을 최신순으로 목록에서 확인할 수 있습니다. 홈 화면에서 캘린더 아래에 글 목록을 확인할 수 있고, 글 보기 페이지에서도 하단에서 글 목록을 확인할 수 있습니다. 항목을 클릭하면 글 보기 페이지로 이동합니다.
  - 글 목록

![image](https://user-images.githubusercontent.com/44095036/122752444-f07f4a00-d2cb-11eb-9f80-220a18364c2a.png)
  - 글 보기 페이지 하단 예시

![image](https://user-images.githubusercontent.com/44095036/122752507-042ab080-d2cc-11eb-98ae-de1485b3147e.png)

#### ④ 일기 삭제
- 내가 작성한 일기 글을 삭제할 수 있습니다.

![image](https://user-images.githubusercontent.com/44095036/122752568-1573bd00-d2cc-11eb-92fd-ef89b47d2392.png)

#### ⑤ 일기 수정
- 내가 작성한 일기 글을 수정하고 저장할 수 있습니다.
  - 수정 이전

![image](https://user-images.githubusercontent.com/44095036/122752742-46ec8880-d2cc-11eb-8bd4-7f43249f267e.png)
  - 수정 페이지

![image](https://user-images.githubusercontent.com/44095036/122752796-566bd180-d2cc-11eb-84e6-0b94a314c458.png)
  - 수정 완료

![image](https://user-images.githubusercontent.com/44095036/122752811-5cfa4900-d2cc-11eb-911e-3c36f59c6dd0.png)

### (2) 에디터
### (3) 일기 검색
사용자의 일기 내용을 검색할 수 있습니다. 사용자가 입력한 검색어가 내용에 포함된 일기의 목록을 보여주며,  페이지네이션을 적용하였습니다.

![image](https://user-images.githubusercontent.com/44095036/122753380-27a22b00-d2cd-11eb-8bda-4f62fdc5ee19.png)

### (4) 기분별 일기 조회
좌측 사이드바에서 기분별로 일기를 조회할 수 있습니다. 사용자가 자신의 기분별 일기를 모아봄으로써 감정을 정리하고 되돌아볼 수 있습니다. 기분 좋음, 그저 그럼, 우울함에 해당하는 아이콘을 누르면 해당 기분으로 기록했던 일기들을 모아서 확인할 수 있으며, 페이지네이션을 적용하였습니다.

![image](https://user-images.githubusercontent.com/44095036/122753549-62a45e80-d2cd-11eb-8af9-b983048d2309.png)

### (5) 캘린더와 기분 통계
- 캘린더 기능과 함께 한달 간 나의 기분을 한눈에 확인할 수 있습니다.
- 한달 간 나의 기분이 어땠는지 그래프로 확인할 수 있습니다.

![image](https://user-images.githubusercontent.com/44095036/122753610-7a7be280-d2cd-11eb-9525-9f4797bda45f.png)
### (6) 로그인, 로그아웃
구글 소셜로그인을 통해 간편하게 로그인 / 로그아웃 할 수 있습니다.

![image](https://user-images.githubusercontent.com/44095036/122753690-93849380-d2cd-11eb-8d57-f64616ce1dc6.png)
![image](https://user-images.githubusercontent.com/44095036/122753697-967f8400-d2cd-11eb-95aa-4a5b9ca04b42.png)
### (7) 오늘의 편지
가장 최근 일기의 기분에 따라 메시지를 사이드바에 출력합니다. 사용자가 가장 최근에 작성한 일기의 기분에 따라, 사용자의 기분을 나아지게 하도록 하며 하루에 하나의 메시지를 보여줍니다. 단, 사용자가 하루에 다수의 일기를 쓴 경우, 가장 최근의 일기에 해당하는 기분에 따라 메시지가 설정됩니다.
- 설정값
  - 기분 좋음 (moodId==1) 이면 하루를 응원해주는 메시지
  - 그저 그럼 (moodId==2) 이면 기분을 좋게 해주는 메시지
  - 우울함 (moodId==3) 이면 위로의 메시지
 
![image](https://user-images.githubusercontent.com/44095036/122754454-a5b30180-d2ce-11eb-9bf9-61c47a6f88b7.png)
