import { useCallback, useState } from "react";
import { ExperienceDataType } from "@@types/Experience";
import styled from "styled-components";
import Lightbox from "react-18-image-lightbox";

interface StickySidebarListItemProps extends ExperienceDataType {}

const StickySidebarListItem = ({
  Company,
  Projects,
}: StickySidebarListItemProps) => {
  const {
    companyName,
    companyDescription,
    companyPosition,
    companyEndPeriod,
    companyStartPeriod,
  } = Company ?? {};

  const [isOpenImagesModal, setIsOpenImagesModal] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const onMovePrevRequest = useCallback((imageUrls: string[]) => {
    setImageIndex((prev) => (prev + imageUrls.length - 1) % imageUrls?.length);
  }, []);

  const onMoveNextRequest = useCallback((imageUrls: string[]) => {
    setImageIndex((prev) => (prev + 1) % imageUrls?.length);
  }, []);

  const onClickOpenImagesModal = useCallback((index: number) => {
    setIsOpenImagesModal(true);
    setImageIndex(index);
  }, []);

  const onCloseRequest = useCallback(() => {
    setIsOpenImagesModal((prev) => !prev);
  }, []);

  return (
    <Wrap>
      <SideContentArea>
        <SideContentBox>
          <CompanyNameText>{companyName}</CompanyNameText>
          <CompanyContentText>{`${companyStartPeriod} ~ ${companyEndPeriod}`}</CompanyContentText>
          <CompanyContentText>{companyPosition}</CompanyContentText>
          <CompanySubContentText>{companyDescription}</CompanySubContentText>
        </SideContentBox>
      </SideContentArea>
      <CenterContentArea>
        {Projects?.map((item, index) => (
          <CenterContentBox key={index}>
            <ProjectTitleText>{item?.title}</ProjectTitleText>
            <ProjectPeriodText>{`${item?.projectStartPeriod} ~ ${item?.projectEndPeriod}`}</ProjectPeriodText>

            <ProjectContentText>{item?.projectDescription}</ProjectContentText>
            <ProjectTechBox>
              {item?.projectTechs?.map((item, index) => (
                <ProjectTechTag>{item}</ProjectTechTag>
              ))}
            </ProjectTechBox>
            {item?.projectSummaryList?.map((item, index) => (
              <ProjectSummaryListBox key={index}>
                <ProjectSummaryList>{item ?? ""}</ProjectSummaryList>
              </ProjectSummaryListBox>
            ))}
            <ImagesArea>
              {item?.imgs?.map((item, index) => {
                return (
                  <ImageBox
                    key={index}
                    onClick={() => onClickOpenImagesModal(index)}
                  >
                    <ImageSpan>
                      <Image src={item} />
                    </ImageSpan>
                  </ImageBox>
                );
              })}
            </ImagesArea>
            {item?.imgs?.length > 0 && isOpenImagesModal && (
              <Lightbox
                mainSrc={item?.imgs[Number(imageIndex)]}
                nextSrc={
                  item?.imgs[(Number(imageIndex) + 1) % item?.imgs.length]
                }
                prevSrc={
                  item?.imgs[
                    (Number(imageIndex) + item?.imgs.length - 1) %
                      item?.imgs.length
                  ]
                }
                onCloseRequest={onCloseRequest}
                onMovePrevRequest={() => onMovePrevRequest(item?.imgs)}
                onMoveNextRequest={() => onMoveNextRequest(item?.imgs)}
              />
            )}
          </CenterContentBox>
        ))}
      </CenterContentArea>
    </Wrap>
  );
};

export default StickySidebarListItem;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const SideContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 1 30%;
  padding-right: 2rem;
`;

const SideContentBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid $color-dark;
  width: 100%;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 16px;
  padding-bottom: 32px;
`;

const CenterContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7 1 70%;
`;

const CenterContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 6.5rem;
`;

const CompanyNameText = styled.h3`
  margin-bottom: 2rem;
  white-space: pre-wrap;
  word-break: keep-all;
  font-weight: bold;
  color: inherit;
  font-size: 1.75rem;
  line-height: 1.5;
`;

const CompanyContentText = styled.span`
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const CompanySubContentText = styled.p`
  margin-top: 1.5rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: rgb(158, 162, 166);
  font-size: 0.875rem;
  line-height: 1.5;
`;

const ProjectTitleText = styled.h3`
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
  word-break: keep-all;
  font-weight: bold;
  color: inherit;
  font-size: 1.75rem;
  line-height: 1.5;
`;

const ProjectPeriodText = styled.span`
  margin-top: 0.25rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const ProjectTechBox = styled.div`
  display: block;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
`;

const ProjectTechTag = styled.span`
  display: inline-block;
  margin: 0.5rem 0.4rem 0 0;
  padding: 3px 8px;
  font-size: 0.7rem;
  border: 1px dashed rgb(49, 132, 255);
  color: inherit;
  border-radius: 7px;
`;

const ProjectContentText = styled.p`
  margin-top: 1rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 1rem;
  line-height: 1.5;
`;

const ProjectSummaryListBox = styled.ul`
  margin-top: 1rem;
  list-style: disc;
  padding-left: 1.5rem;
`;

const ProjectSummaryList = styled.li`
  margin-bottom: 1rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 1rem;
  line-height: 1.5;
  ::marker {
    color: rgb(49, 132, 255);
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
`;

const ImagesArea = styled.ul`
  padding: 0;
`;

const ImageBox = styled.li`
  display: inline-block;
  list-style: none;
  vertical-align: top;
  cursor: pointer;
  transition: 0.1s ease-in-out;
`;

const ImageSpan = styled.span`
  color: transparent;
  display: inline-block;
`;

const Image = styled.img`
  @keyframes customCursorAnimation {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  display: inline-block;
  object-fit: cover;
  margin: 0.6rem 0.6rem 0 0;
  vertical-align: top;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
  width: 120px;
  height: 80px;
  :hover {
    transform: scale(1.1);
    box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2),
      0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }
`;
