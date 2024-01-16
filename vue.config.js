const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build 타켓 디렉토리
  outputDir: "../calendar-back/src/main/resources/static",

  // npm run serve 프록시 설정
  // target: 백엔드 포트
  // changeOrigin -> true로 해야 cors문제 해결 가능
  // ws 서버와 클라이언트 버전이 다른 경우, 웹소켓을 사용할 프로젝트가 아니므로 false
  devServer: {
    proxy: {
      '/': {
        target: "http://localhost:8000",
        changeOrigin: true,
        ws: false
      }
    }
  }
})
