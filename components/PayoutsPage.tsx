import React, { useEffect, useState, useCallback } from "react";
import { ApiService } from "../services/apiService";
import "react-loading-skeleton/dist/skeleton.css";
import { Payout } from "../interfaces";
import {
  PaginationButton,
  PaginationContainer,
  PayoutHistoryTable,
  PayoutsPageContainer,
  ResponsiveDateTimeCell,
  ResponsiveTableHeaderCell,
  SearchField,
  StatusCell,
  SubTitleContainer,
  SubTitleText,
  TableCell,
  TableRow,
  Title,
  ValueCell,
  PageTitle
} from "../styles/PayoutsPage.styles";
import SkeletonLoader from "./SkeletonLoader";
import { formatDateTime } from "../commonFunctions";

const PayoutsPage: React.FC = () => {
  const [payoutData, setPayoutData] = useState<Payout[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await ApiService.fetchPayOutHistory(`payouts?page=${currentPage}`);
      setPayoutData(data);
    } catch (error) {
      console.error("Error fetching payouts:", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {

    fetchData();
  }, [currentPage]);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const searchData = await ApiService.searchPayoutHistory(searchTerm);
      setPayoutData(searchData);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <PayoutsPageContainer>
        <Title>Payouts</Title>
        <SubTitleContainer>
          <SubTitleText>Payout History</SubTitleText>
          <SearchField
            type="text"
            placeholder="Search by username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <PaginationButton onClick={handleSearch}>Search</PaginationButton>
        </SubTitleContainer>
        {loading ? (
         <SkeletonLoader />
        ) : (
          <>
            <PayoutHistoryTable>
              <thead>
                <TableRow $isOdd={false}>
                  <ResponsiveTableHeaderCell>
                    Date & Time
                  </ResponsiveTableHeaderCell>
                  <ResponsiveTableHeaderCell>Status</ResponsiveTableHeaderCell>
                  <ResponsiveTableHeaderCell>Value</ResponsiveTableHeaderCell>
                  <ResponsiveTableHeaderCell>
                    Username
                  </ResponsiveTableHeaderCell>
                </TableRow>
              </thead>
              <tbody>
                {payoutData.map((payout, index) => (
                  <TableRow key={index} $isOdd={index % 2 === 0}>
                    <ResponsiveDateTimeCell>
                      {formatDateTime(payout.dateAndTime)}
                    </ResponsiveDateTimeCell>
                    <TableCell>
                      <StatusCell status={payout.status}>{payout.status === "Completed" ? "Paid" : payout.status}</StatusCell>
                    </TableCell>
                    <ValueCell>{payout.value}</ValueCell>
                    <ValueCell>{payout.username}</ValueCell>
                  </TableRow>
                ))}
              </tbody>
            </PayoutHistoryTable>
            <PaginationContainer>
              <PaginationButton onClick={handlePrevPage}>
                Previous Page
              </PaginationButton>
              <PageTitle>Page {currentPage}</PageTitle>
              <PaginationButton onClick={handleNextPage}>
                Next Page
              </PaginationButton>
            </PaginationContainer>
          </>
        )}
      </PayoutsPageContainer>
    </>
  );
};

export default PayoutsPage;
