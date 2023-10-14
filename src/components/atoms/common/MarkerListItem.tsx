import styled from "styled-components";

interface MarkerListItemProps {
  text: string;
}

const MarkerListItem = ({ text }: MarkerListItemProps) => {
  return <MarkerList>{text}</MarkerList>;
};

export default MarkerListItem;

const MarkerList = styled.li`
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 0.9rem;
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
