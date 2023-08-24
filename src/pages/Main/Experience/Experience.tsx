import { ExperienceDataType } from "@@types/Experience";
import StickySidebarListItem from "@components/Experience/StickySidebarListItem";
import * as S from "@pages/Main/Experience/Experience.style";

const LIST_DATA: ExperienceDataType[] = [
  {
    Company: {
      companyName: "SUMMITS Corp.",
      companyStartPeriod: "2022.6",
      companyEndPeriod: "2023.11",
      companyPosition: "Front-End\n서비스 개발/운영/유지보수",
      companyDescription:
        "인도네시아 최초 O2O 뷰티 앱 플랫폼 글로벌 서비스 MyVenus를 프론트엔드 개발자로서 개발/운영하였습니다. 서비스 앱 외주 프로젝트를 통한 인연을 통해 입사하게 되었고 초기 서비스 런칭 또한 함께하였습니다.\n\n저에게 좋은 인연으로 시작된 MyVenus 서비스 개발자로서 개발/운영을 통해 다양한 경험들과 기회를 통해 많은 성장을 하게되었습니다.",
    },
    Projects: [
      {
        title: "마이 비너스 인도네시아 뷰티 플랫폼 서비스 APP",
        projectStartPeriod: "2022.6",
        projectEndPeriod: "2023.11",
        projectTechs: [
          "Typescript",
          "React Native",
          "Redux Tool Kit",
          "Firebase",
          "i18n",
          "Code Push",
          "Fastlane",
          "Sentry",
          "GA",
          "Detox (E2E)",
        ],
        projectDescription:
          "O2O 뷰티 앱 플랫폼 서비스를 초기 개발 및 런칭을 시작하여 개발/운영하였습니다. 실제 사용자들이 직접 이용하는 O2O 플랫폼 답게 상품 탐색, 검색, 지도, 채팅 등등 다양한 기능들을 개발하였습니다. 약 95% 리드하여 개발/운영을 맡았습니다.\n\n단순 기능 개발을 넘어 사용성을 고려한 성능 최적화를 비롯하여 더 나은 서비스 개발 환경을 위한 다양한 DevOps 구축 및 적용 또한 귀중한 경험이었습니다.\n\nApp 다운로드 횟수 10만 달성, 회원가입 수 7만 달성, 회원가입 수 대비 결제 유저 전환율 4% 달성 등등 많은 성과를 이루고 경험해보기도 하였습니다.",
        projectSummaryList: ["1", "2", "3"],
        imgs: ["1,", "2", "3"],
      },
      {
        title: "마이 비너스 인도네시아 뷰티 플랫폼 서비스 APP",
        projectStartPeriod: "2022.6",
        projectEndPeriod: "2023.11",
        projectTechs: [
          "Typescript",
          "React Native",
          "Redux Tool Kit",
          "Firebase",
          "i18n",
          "Code Push",
          "Fastlane",
          "Sentry",
          "GA",
          "Detox (E2E)",
        ],
        projectDescription:
          "O2O 뷰티 앱 플랫폼 서비스를 초기 개발 및 런칭을 시작하여 개발/운영하였습니다. 실제 사용자들이 직접 이용하는 O2O 플랫폼 답게 상품 탐색, 검색, 지도, 채팅 등등 다양한 기능들을 개발하였습니다. 약 95% 리드하여 개발/운영을 맡았습니다.\n\n단순 기능 개발을 넘어 사용성을 고려한 성능 최적화를 비롯하여 더 나은 서비스 개발 환경을 위한 다양한 DevOps 구축 및 적용 또한 귀중한 경험이었습니다.\n\nApp 다운로드 횟수 10만 달성, 회원가입 수 7만 달성, 회원가입 수 대비 결제 유저 전환율 4% 달성 등등 많은 성과를 이루고 경험해보기도 하였습니다.",
        projectSummaryList: ["1", "2", "3"],
        imgs: ["1,", "2", "3"],
      },
      {
        title: "마이 비너스 인도네시아 뷰티 플랫폼 서비스 APP",
        projectStartPeriod: "2022.6",
        projectEndPeriod: "2023.11",
        projectTechs: [
          "Typescript",
          "React Native",
          "Redux Tool Kit",
          "Firebase",
          "i18n",
          "Code Push",
          "Fastlane",
          "Sentry",
          "GA",
          "Detox (E2E)",
        ],
        projectDescription:
          "O2O 뷰티 앱 플랫폼 서비스를 초기 개발 및 런칭을 시작하여 개발/운영하였습니다. 실제 사용자들이 직접 이용하는 O2O 플랫폼 답게 상품 탐색, 검색, 지도, 채팅 등등 다양한 기능들을 개발하였습니다. 약 95% 리드하여 개발/운영을 맡았습니다.\n\n단순 기능 개발을 넘어 사용성을 고려한 성능 최적화를 비롯하여 더 나은 서비스 개발 환경을 위한 다양한 DevOps 구축 및 적용 또한 귀중한 경험이었습니다.\n\nApp 다운로드 횟수 10만 달성, 회원가입 수 7만 달성, 회원가입 수 대비 결제 유저 전환율 4% 달성 등등 많은 성과를 이루고 경험해보기도 하였습니다.",
        projectSummaryList: ["1", "2", "3"],
        imgs: ["1,", "2", "3"],
      },
    ],
  },
];

const Experience = () => {
  return (
    <S.Wrap>
      <S.Area>
        <S.Title>Experience</S.Title>
        <S.TitleKorean>이력</S.TitleKorean>
        <S.lines />
        {LIST_DATA?.map((item, index) => {
          return <StickySidebarListItem key={index} {...item} />;
        })}
      </S.Area>
    </S.Wrap>
  );
};

export default Experience;
