
/*
 * 개인 학습 시스템 설정
 * 공개 가능한 Project URL과 Publishable key만 사용합니다.
 * Secret key 또는 service_role key는 절대 입력하지 마세요.
 */
window.LEARNING_SITE_CONFIG = Object.freeze({
  siteName: "개인 학습 시스템",
  version: "0.2.0",

  supabaseUrl: "https://kdioyadhvxdvftunalba.supabase.co",

  // Supabase 대시보드에서 확인한 sb_publishable_ 키를 따옴표 안에 입력하세요.
  supabasePublishableKey: "여기에_본인의_sb_publishable_키_입력",

  backendConnected: false,

  navigation: [
    { id: "home", label: "학습 홈" },
    { id: "manage", label: "학습 관리" },
    { id: "rooms", label: "학습방" },
    { id: "research", label: "연구·보고서" },
    { id: "archive", label: "보관함" }
  ]
});
