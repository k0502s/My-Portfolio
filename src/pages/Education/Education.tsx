import SectionTitle from "@components/molecules/common/SectionTitle";
import EducationListItem from "@components/molecules/Education/EducationListItem";
import { EDUCATION_LIST } from "@data/Education";
import * as S from "@pages/Education/Education.style";

const Education = () => {
  return (
    <S.Wrap>
      <S.Area>
        <SectionTitle title="Education" koreaTitle="교육" />
        {EDUCATION_LIST.map((item, index) => (
          <EducationListItem key={index} data={item} />
        ))}
      </S.Area>
    </S.Wrap>
  );
};

export default Education;
