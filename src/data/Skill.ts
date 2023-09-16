import { SkillDataType } from "@@types/Skill";

export const SKILL_LIST: SkillDataType[] = [
  {
    title: "HTML / CSS",
    skills: ["HTML", "CSS3", "Sass(Scss)", "Styled-components"],
    description: [
      "디자인을 보고 페이지의 구조를 설계할 수 있습니다.",
      "CSS Preprocessor 및 CSS-in-JS를 상황에 따라 적절하게 사용할 수 있습니다.",
      "CSS의 Flex, Gird 속성들을 적극 사용하여 레이아웃을 설계 및 개발합니다.",
      "HTML를 작성할 때 적절한 구조와 의미를 부여하도록 노력합니다.",
      "SEO(Search Engine Optimization) 적용을 고려하며 개발합니다.",
    ],
  },
  {
    title: "Javascript / Typescript",
    skills: ["Javascript", "Typescript"],
    description: [
      "ES6 문법을 활용해 개발하는 데 익숙합니다.",
      "Vanilla JavaScript를 활용해 DOM 조작하는 데 익숙합니다.",
      "reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.",
      "TypeScript를 활용한 애플리케이션 개발을 할 수 있습니다.",
      "TypeScript를 통해 앞으로의 유지보수 측면까지 고려하며 타입을 지정하는 개발을 추구합니다.",
    ],
  },
  {
    title: "Framework",
    skills: [
      "ReactJs",
      "NextJs",
      "React Native",
      "Redux Tookkit",
      "React Query",
    ],
    description: [
      "ReactJs의 라이프 사이클을 이해하고 있으며 렌더링 최적화를 고려한 개발을 합니다.",
      "React hooks / Custom hooks를 사용하여 적절한 데이터를 분배 및 최적화합니다.",
      "Redux와 같은 상태 관리 툴을 프로젝트 내 상황을 고려하여 무분별하지 않게 적절하게 사용합니다.",
      "NextJs을 통한 SEO 최적화 세팅 / 서버 사이드 랜더링, 서버 컴포넌트의 특성을 고려한 개발 및 운영이 가능합니다.",
      "현재 버전의 ReactJs와 NextJs의 공통점과 차이점을 인지하고 개발에 임하고 있습니다.",
      "React Native 크로스 플랫폼 Framework를 통해 앱 생태계를 이해한 개발 및 운영이 가능합니다.",
      "Atomic design으로 컴포넌트 분할 및 프로젝트 구조를 작성하고 있습니다.",
    ],
  },
  {
    title: "DevOps / Test Code",
    skills: [
      "Git Action",
      "Sentry",
      "Google Analytics",
      "GCP",
      "Firebase",
      "Fastlane",
      "Jenkins",
      "Jest",
      "Testing Library (Unit)",
      "Cypress (E2E)",
      "Detox (E2E)",
    ],
    description: [
      "자동화 프로세스를 만들어서 팀 내 생산성을 높이기 위해 노력하고자 하는 의지가 많습니다.",
      "Git Action을 구축해 보았습니다.",
      "Slack, Jira 툴들을 이용한 업무 자동화, 자동 알림 등을 구축하여 팀 생산성 개선해 보았습니다",
      "Sentry을 서비스에 구축하고 실시간으로 이슈 트래킹하며 대응할 수 있습니다.",
      "Google Analytics, GCP, Firebase을 서비스에 적용 및 데이터 분석을 통한 서비스 운영을 해보았습니다.",
      "Fastlane, Jenkins을 통해 개발 배포 환경을 구축해 보았습니다.",
      "Unit 테스트 혹은 E2E 테스트가 필요하다고 생각한 중요 비즈니스 로직 및 기능 플로우에 테스트 코드를 적용해 보았습니다.",
    ],
  },
];
