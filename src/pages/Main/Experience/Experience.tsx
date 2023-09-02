import SectionTitle from "@components/molecules/common/SectionTitle";
import StickySidebarListItem from "@components/molecules/Experience/StickySidebarListItem";
import { EXPERIENCE_LIST } from "@data/Experience";
import * as S from "@pages/Main/Experience/Experience.style";

const Experience = () => {
  return (
    <S.Wrap>
      <S.Area>
        <SectionTitle title="Experience" koreaTitle="이력" />
        {EXPERIENCE_LIST?.map((item, index) => {
          return <StickySidebarListItem key={index} {...item} />;
        })}
      </S.Area>
    </S.Wrap>
  );
};

export default Experience;
