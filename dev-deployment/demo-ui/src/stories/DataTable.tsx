import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    headerName: "Personal Info",
    children: [
      { field: "firstName", headerName: "First Name", width: 130 },
      { field: "lastName", headerName: "Last Name", width: 130 },
    ],
  },
  {
    headerName: "Address",
    children: [
      { field: "city", headerName: "City", width: 130 },
      { field: "country", headerName: "Country", width: 130 },
    ],
  },
  {
    field: "age",
    headerName: "Age",
    width: 90,
  },
];

const rows = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    country: "USA",
    age: 30,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    city: "San Francisco",
    country: "USA",
    age: 25,
  },
  // Add more rows as needed...
];

export default function CustomDataGrid() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

// import * as React from "react";
// import {
//   DataGrid,
//   GridColDef,
//   GridToolbar,
//   GridValueGetterParams,
// } from "@mui/x-data-grid";
//
// import {
//   makeMutable,
//   prepareContent,
// } from "../../../service-ui/app/src/badatz/summaryPage/summaryView/SimpleSummaryView/utils.ts";
// import { sampleSummaryTabledata } from "../../../service-ui/app/src/badatz/summaryPage/summaryView/SimpleSummaryView/utils.notest.ts";
// const [rows2, columns2, specialColumnsDict, parameters] = prepareContent(
//   makeMutable(sampleSummaryTabledata),
//   ["policies"]
// );
//
// console.log("rows", rows2);
// console.log("columns", columns2);
//
// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];
//
// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];
// prepareContent(makeMutable(sampleSummaryTabledata), ["policies"]);
// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows2.map((row, i) => ({ id: i, ...row }))}
//         columns={columns2.map((col) => {
//           return {
//             field: col,
//             headerName: col,
//             width: 150,
//             // editable: true,
//           };
//         })}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//         slots={{ toolbar: GridToolbar }}
//       />
//     </div>
//   );
// }
