import { memo, useCallback, useState } from "react";
import { ExperienceDataType, Project } from "@@types/Experience";
import styled from "styled-components";
import Lightbox from "react-18-image-lightbox";
import LinkIcon from "@assets/images/iconLink.png";
import MarkerListItem from "@components/atoms/common/MarkerListItem";
import TechTagItem from "@components/atoms/common/TechTagItem";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface StickySidebarListItemProps extends ExperienceDataType {}

const PreviewImage = memo(
  ({ url, onClick }: { url: string; onClick: () => void }) => {
    return (
      <ImageBox onClick={onClick}>
        <ImageSpan>{<Image src={url} effect="blur" />}</ImageSpan>
      </ImageBox>
    );
  },
);

const Content = ({ data }: { data: Project }) => {
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
    <CenterContentBox>
      <ProjectTitleText
        style={!data?.linkUrl ? { cursor: "default" } : {}}
        onClick={() => {
          if (!data?.linkUrl) return;
          window.open(data?.linkUrl);
        }}
      >
        {(data?.linkUrl?.length ?? 0) > 0 && (
          <LinkBox>
            <IconLink src={LinkIcon} />
          </LinkBox>
        )}
        {data?.title}
      </ProjectTitleText>
      <ProjectPeriodText>{`${data?.projectStartPeriod} ~ ${data?.projectEndPeriod}`}</ProjectPeriodText>
      <ProjectContentText>{data?.projectDescription}</ProjectContentText>
      <ProjectTechBox>
        {data?.projectTechs?.map((item, index) => (
          <TechTagItem key={index} text={item} />
        ))}
      </ProjectTechBox>
      {data?.projectSummaryList?.map((item, index) => (
        <ProjectSummaryListBox key={index}>
          <MarkerListItem text={item} />
        </ProjectSummaryListBox>
      ))}
      <ImagesArea>
        {data?.imgs?.map((item, index) => {
          return (
            <PreviewImage
              key={index}
              url={item}
              onClick={() => onClickOpenImagesModal(index)}
            />
          );
        })}
      </ImagesArea>
      {data?.imgs?.length > 0 && isOpenImagesModal && (
        <Lightbox
          mainSrc={data?.imgs[Number(imageIndex)]}
          nextSrc={data?.imgs[(Number(imageIndex) + 1) % data?.imgs.length]}
          prevSrc={
            data?.imgs[
              (Number(imageIndex) + data?.imgs.length - 1) % data?.imgs.length
            ]
          }
          onCloseRequest={onCloseRequest}
          onMovePrevRequest={() => onMovePrevRequest(data?.imgs)}
          onMoveNextRequest={() => onMoveNextRequest(data?.imgs)}
        />
      )}
    </CenterContentBox>
  );
};

const StickySidebarListItem = ({
  company,
  projects,
}: StickySidebarListItemProps) => {
  const {
    companyName,
    companyDescription,
    companyPosition,
    companyEndPeriod,
    companyStartPeriod,
    blogLink,
  } = company ?? {};

  return (
    <Wrap>
      <SideContentArea>
        <SideContentBox>
          <CompanyNameText>{companyName}</CompanyNameText>
          <CompanyContentText>{`${companyStartPeriod} ~ ${companyEndPeriod}`}</CompanyContentText>
          <CompanyContentText>{companyPosition}</CompanyContentText>
          <CompanySubContentText>{companyDescription}</CompanySubContentText>
          {(blogLink?.length ?? 0) > 0 && (
            <BlogText onClick={() => window.open(blogLink)}>
              블로그 글 보러 가기
            </BlogText>
          )}
        </SideContentBox>
      </SideContentArea>
      <CenterContentArea>
        {projects?.map((item, index) => (
          <Content key={index} data={item} />
        ))}
      </CenterContentArea>
    </Wrap>
  );
};

export default StickySidebarListItem;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 16px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const BlogText = styled.span`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: rgb(90, 103, 216);
  cursor: pointer;
`;

const SideContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 1 30%;
  padding-right: 2rem;
  @media screen and (max-width: 1024px) {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(49, 132, 255);
  }
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
  margin-bottom: 4rem;
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
  white-space: pre-wrap;
  word-break: keep-all;
  font-weight: bold;
  color: inherit;
  font-size: 1.75rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const LinkBox = styled.button`
  color: inherit;
  display: inline-block;
  border: none;
  align-items: center;
  background-color: #ffff;
  cursor: pointer;
`;

const IconLink = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 1px;
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

const ImagesArea = styled.ul`
  padding: 0;
  margin-top: 1rem;
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

const Image = styled(LazyLoadImage)`
  display: inline-block;
  object-fit: contain;
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
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 60px;
  }
`;
