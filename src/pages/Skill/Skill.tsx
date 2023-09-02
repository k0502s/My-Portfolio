import SectionTitle from "@components/molecules/common/SectionTitle";
import SkillListItem from "@components/molecules/Skill/SkillListItem";
import { SKILL_LIST } from "@data/Skill";
import * as S from "@pages/Skill/Skill.style";

const Skill = () => {
  return (
    <S.Wrap>
      <S.Area>
        <SectionTitle title="Skill" koreaTitle="기술" />
        {SKILL_LIST.map((item, index) => (
          <SkillListItem key={index} data={item} />
        ))}
      </S.Area>
    </S.Wrap>
  );
};

export default Skill;
