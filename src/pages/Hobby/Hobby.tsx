import SectionTitle from "@components/molecules/common/SectionTitle";
import HobbyListItem from "@components/molecules/Hobby/HobbyListItem";
import { HOBBY_LIST } from "@data/Hobby";
import * as S from "@pages/Hobby/Hobby.style";

const Hobby = () => {
  return (
    <S.Wrap>
      <S.Area>
        <SectionTitle title="Hobby" koreaTitle="취미" />
        {HOBBY_LIST.map((item, index) => (
          <HobbyListItem key={index} data={item} />
        ))}
      </S.Area>
    </S.Wrap>
  );
};

export default Hobby;
