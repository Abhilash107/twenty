import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownButton from './DropdownButton';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SortAndFilterBar, { SortType } from './SortAndFilterBar';
import { useCallback, useState } from 'react';
import { SortDropdownButton } from './SortDropdownButton';

type OwnProps = {
  viewName: string;
  viewIcon?: IconProp;
  onSortsUpdate?: (sorts: Array<SortType>) => void;
  sortsAvailable: Array<SortType>;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  color: ${(props) => props.theme.text60};
  font-weight: 500;
  padding-left: ${(props) => props.theme.spacing(3)};
  padding-right: ${(props) => props.theme.spacing(1)};
`;

const StyledIcon = styled.div`
  display: flex;
  margin-right: ${(props) => props.theme.spacing(2)};

  & > svg {
    font-size: ${(props) => props.theme.fontSizeLarge};
  }
`;

const StyledViewSection = styled.div`
  display: flex;
`;

const StyledFilters = styled.div`
  display: flex;
  font-weight: 400;
  margin-right: ${(props) => props.theme.spacing(2)};
`;

function TableHeader({
  viewName,
  viewIcon,
  onSortsUpdate,
  sortsAvailable,
}: OwnProps) {
  const [sorts, innerSetSorts] = useState([] as Array<SortType>);

  const setSorts = useCallback(
    (sorts: SortType[]) => {
      innerSetSorts(sorts);
      onSortsUpdate && onSortsUpdate(sorts);
    },
    [onSortsUpdate],
  );

  const onSortItemUnSelect = useCallback(
    (sortId: string) => {
      const newSorts = [] as SortType[];
      innerSetSorts(newSorts);
      onSortsUpdate && onSortsUpdate(newSorts);
    },
    [onSortsUpdate],
  );

  return (
    <StyledContainer>
      <StyledTableHeader>
        <StyledViewSection>
          <StyledIcon>
            {viewIcon && <FontAwesomeIcon icon={viewIcon} />}
          </StyledIcon>
          {viewName}
        </StyledViewSection>
        <StyledFilters>
          <DropdownButton label="Filter" isActive={false}></DropdownButton>
          <SortDropdownButton
            setSorts={setSorts}
            sorts={sorts}
            sortsAvailable={sortsAvailable}
          />

          <DropdownButton label="Settings" isActive={false}></DropdownButton>
        </StyledFilters>
      </StyledTableHeader>
      {sorts.length > 0 && (
        <SortAndFilterBar sorts={sorts} onRemoveSort={onSortItemUnSelect} />
      )}
    </StyledContainer>
  );
}

export default TableHeader;
