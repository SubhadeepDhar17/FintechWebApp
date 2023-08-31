import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Transaction ID ⇅",
        accessor: "txn_id"
      },
      {
        Header: "Invoice ⇅",
        accessor: "to"
      },
      {
        Header: "Payer ⇅",
        accessor: "payer"
      },
      {
        Header: "Payee ⇅",
        accessor: "payee"
      },
      {
        Header: "Amount ⇅",
        accessor: "amount"
      },
      {
        Header: "Date ⇅",
        accessor: "year"
      }
    ],
    []
  );

  return columns;
}
