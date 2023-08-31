import './App.css';
import Cards from './Components/Cards/Cards';
import Body from './Components/Body/Body';
import RenderAnotherTable from './Components/RenderAnotherTable';
import Table from './Components/Table';
import tableData1 from './tableData1.json';

const columns = [
  { label: "Full Name", accessor: "full_name", sortable: true },
  { label: "Email", accessor: "email", sortable: false },
  { label: "Gender", accessor: "gender", sortable: true, sortbyOrder: "desc" },
  { label: "Age", accessor: "age", sortable: true },
  { label: "Start date", accessor: "start_date", sortable: true },
];

function App() {
  return (
    <>
      <Cards />
      <div className="table_container">
      <h1>Reusable sortable table with React</h1>
      <Table
        caption="Developers currently enrolled in this course. The table below is ordered (descending) by the Gender column."
        data={tableData1}
        columns={columns}
      />
      <br />
      <RenderAnotherTable />
      <br />
    </div>
    </>
  );
}

export default App;
