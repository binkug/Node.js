//모듈 가져오기 - express, morgan, cookie-parser, express-session
//dotenv, multer
//path, fs 는 기본 내장 모듈

//express 모듈은 웹 서버를 편리하게 만들어주는 모듈 
const express = require('express')
//multer는 파일 업로드 처리를 위한 모듈
const multer = require('multer')
//fs는 파일 읽고 쓰기 위한 내장 모듈
const fs = require('fs');
//path는 파일 경로와 관련된 내장 모듈 - express 에서는 필수
const path = require('path')


//morgan는 로그를 자세히 출력하기 위한 모듈
const morgan = require('morgan')
//cookie-parser 와 session은 쿠키와 세션을 사용하기 위한 모듈
const cookieParser = require('cookie-parser')
const session = require('express-session')
//dotenv는 .env 파일에 작성한 내용을 process.env.으로 호출할 수 있도록 해주는 모듈
const dotenv = require('dotenv')


//.env 파일의 내용 가져오기
dotenv.config()

//웹 서버 객체를 만들고 포트를 설정
const app = express();
app.set('port', process.env.PORT || 3000)

//요청 처리
app.get('/', (req, res, next) => {
	res.send('안녕하세요 메인 페이지 입니다.');
});

//서버 실행
app.listen(app.get('port'), () => {
	console.log(app.get('port'), '번 포트에서 대기 중');
});



