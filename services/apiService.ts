const BASE_URL = "https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test";

const fetchPayOutHistory = async (endpoint: string, options?: RequestInit)  => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    const data = await response.json();
    return data?.data ?? [];
  } catch (error) {
    console.error("fetchPayOutHistory():", error.message);
    throw error;
  }
}

const searchPayoutHistory =  async (query: string) => {
  try {
    const data = await ApiService.fetchPayOutHistory(`search?query=${query}`);
    return data;
  } catch (error) {
    console.error("searchPayoutHistory():", error.message);
    throw error;
  }
};

export const ApiService = {
  fetchPayOutHistory,
  searchPayoutHistory
};
