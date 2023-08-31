import { useMemo } from "react";
import { NavLink } from "react-router-dom";

export default function useRows() {
  const rows = useMemo(
    () => [
      {
        txn_id: "TFG543",
        to: <NavLink to="transaction">IXB546</NavLink>,
        payer: "🇺🇸 Green Fields",
        payee: "🇦🇽 Low Plains",
        amount: "$12657",
        year: "23rd May"
      },
      {
        txn_id: "RTD342",
        to: <NavLink to="/">INB675</NavLink>,
        payer: "🇬🇧 Wagon Zero",
        payee: "🇨🇮 Polish Greys",
        amount: "$12658",
        year: "12th Aug"
      },
      {
        txn_id: "UJI897",
        to: <NavLink to="/">UIX423</NavLink>,
        payer: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Peoples Party",
        payee: "🇫🇮 Classic Zone",
        amount: "$12697",
        year: "18th Feb"
      },
      {
        txn_id: "OIP098",
        to: <NavLink to="/">LIV563</NavLink>,
        payer: "🇸🇪 Black Dove",
        payee: "🇰🇷 Mourn Light",
        amount: "$13657",
        year: "19th June"
      },
      {
        txn_id: "TRZ123",
        to: <NavLink to="/">IXQ231</NavLink>,
        payer: "🇺🇸 Sedan E",
        payee: "🇿🇦 Xenon Finance",
        amount: "$10657",
        year: "16th July"
      }
    ],
    []
  );

  return rows;
}
