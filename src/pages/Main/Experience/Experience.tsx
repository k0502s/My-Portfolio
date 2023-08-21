import StickySidebarListItem from "@components/Experience/StickySidebarListItem";
import * as S from "@pages/Main/Experience/Experience.style";

const Experience = () => {
  return (
    <S.Wrap>
      <S.Area>
        <S.Title>Experience</S.Title>
        <S.TitleKorean>이력</S.TitleKorean>
        <S.lines />
        <StickySidebarListItem />
        <StickySidebarListItem />
        <StickySidebarListItem />
      </S.Area>
    </S.Wrap>
  );
};

export default Experience;
