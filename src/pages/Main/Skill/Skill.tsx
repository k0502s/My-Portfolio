import { SkillDataType } from "@@types/Skill";
import SectionTitle from "@components/molecules/common/SectionTitle";
import SkillListItem from "@components/molecules/Skill/SkillListItem";
import * as S from "@pages/Main/Skill/Skill.style";

const SKILL_LIST: SkillDataType[] = [
  {
    title: "HTML/CSS",
    skills: [
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
    description: [
      "디자인을 보고 페이지의 구조를 결정할 수 있습니다.",
      "Sass(Scss) 등의 CSS Preprocessor를 사용할 수 있습니다.",
    ],
  },
  {
    title: "Language",
    skills: ["Javascript", "Typescript"],
    description: [
      "ES6 문법을 활용해 웹 어플리케이션을 개발하는 데 익숙합니다.",
      "Vanilla JavaScript를 활용해 DOM 조작하는 데 익숙합니다.",
      "reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.",
      "TypeScript를 활용해 웹 어플리케이션을 제작하는 데 익숙합니다.",
      "때에 따라 interface와 type을 적절히 나누어 사용 할 수 있습니다.",
      "Utility Type들을 활용해 약간 복잡한 Type들을 생성하여 개발할 수 있습니다.",
    ],
  },
];

const Skill = () => {
  return (
    <S.Wrap>
      <S.Area>
        <SectionTitle title="skill" koreaTitle="기술" />
        {SKILL_LIST.map((item, index) => (
          <SkillListItem key={index} data={item} />
        ))}
      </S.Area>
    </S.Wrap>
  );
};

export default Skill;
