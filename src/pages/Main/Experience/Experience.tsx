import { ExperienceDataType } from "@@types/Experience";
import StickySidebarListItem from "@components/Experience/StickySidebarListItem";
import * as S from "@pages/Main/Experience/Experience.style";

const LIST_DATA: ExperienceDataType[] = [
  {
    Company: {
      CompanyName: "SUMMITS Corp.",
      CompanyStartPeriod: "2022.6",
      CompanyEndPeriod: "2023.10",
      CompanyPosition: "Front-End\n서비스 개발/운영/유지보수",
      CompanyDescription:
        "인도네시아 최초 O2O 뷰티 앱 플랫폼 글로벌 서비스 MyVenus를 프론트엔드 개발자로서 개발/운영하였습니다. 서비스 앱 외주 프로젝트를 통한 인연을 통해 입사하게 되었고 초기 서비스 런칭 또한 함께하였습니다.\n\n저에게 좋은 인연으로 시작된 MyVenus 서비스 개발자로서 개발/운영을 통해 다양한 경험들과 기회를 통해 많은 성장을 하게되었습니다.",
    },
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
