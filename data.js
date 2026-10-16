/*
 * 개인 학습 시스템 - 초기 설정
 *
 * 이 파일에는 공개되어도 되는 사이트 표시 설정만 둡니다.
 * 비밀번호, Supabase secret/service_role key, 개인 학습 기록을 넣지 마세요.
 * 사용자 데이터는 추후 인증된 Supabase DB와 비공개 Storage에 저장합니다.
 */
window.LEARNING_SITE_CONFIG = Object.freeze({
  siteName: "개인 학습 시스템",
  version: "0.1.0",
  backendConnected: false,
  navigation: [
    { id: "home", label: "학습 홈" },
    { id: "manage", label: "학습 관리" },
    { id: "rooms", label: "학습방" },
    { id: "research", label: "연구·보고서" },
    { id: "archive", label: "보관함" }
  ]
});
