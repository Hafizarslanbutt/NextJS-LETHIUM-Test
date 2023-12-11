export type User = {
  id: number
  name: string
}
export type Payout = {
  dateAndTime: string;
  status: string;
  value: string;
  username: string;
}

export type StatusCellProps ={
  status: string;
}