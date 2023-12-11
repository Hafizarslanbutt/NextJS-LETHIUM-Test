import styled from "styled-components";
import { StatusCellProps } from "../interfaces";

export const PayoutsPageContainer = styled.div`
  background-color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-family: var(--font-inter);
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const PageTitle = styled.h3`
  font-family: var(--font-inter);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: "center";
`;

export const SubTitleText = styled.h4`
  color: var(--neutral-07);
  font-family: var(--font-inter);
  margin-left: 16px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  border-left: 16px solid var(--secondary-01);
  padding-left: 16px;
`;

export const PayoutHistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-left: 20px;
  margin-bottom: 20px;
  table-layout: fixed;
`;

export const ResponsiveTableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  color: var(--neutral-04);
  font-family: var(--font-inter);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TableRow = styled.tr<{ $isOdd: boolean }>`
  background: ${(props) =>
    props.$isOdd ? `var(--neutral-01)` : "transparent"};
  border-radius: ${(props) => (props.$isOdd ? "8px" : "0")};
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: left;
`;
export const StatusCellContainer = styled.a`
  padding: 8px;
  border-radius: 8px;
`;

export const ResponsiveDateTimeCell = styled(TableCell)`
  color: var(--neutral-04);
  font-family: var(--font-inter);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ValueCell = styled(TableCell)`
  color: var(--neutral-07);
  font-family: var(--font-inter);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StatusCell = styled.a<StatusCellProps>`
  display: flex;
  padding: 2px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: var(--font-inter);
  font-size: 14px;
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--neutral-07);
  background: ${(props) =>
    props.status === "Pending"
      ? "rgba(111, 118, 126, 0.40)"
      : "var(--secondary-04)"};
  width: ${(props) => (props.status === "Pending" ? "71px" : "45px")};
`;

export const SearchField = styled.input`
  padding: 15px;
  border: 1px solid var(--neutral-04);
  border-radius: 4px;
  margin-left: auto;
  margin-right: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  outline: none;
  box-shadow: none;
  padding: 18px;
  border: 0;
  border-radius: 10px;
  background-color: var(--secondary-01);
  cursor: pointer;
  color: white;
`;
