import Table from 'react-bootstrap/Table';

function DataTable() {
    return (
        <Table striped bordered hover size="sm" style={{ border: '3px solid black' }} >
            <thead>
                <tr style={{ background: "rgb(99 99 99 / 52%)", border: '2px solid black' }}>
                    <th>Sr. no</th>
                    <th>TITLE</th>
                    <th>VIEW</th>
                </tr>
            </thead>
            <tbody>

                <tr style={{ background: "white" }}>
                    <td>1</td>
                    <td>2022 Batch Alumini Data</td>
                    <td>View</td>
                </tr>
                <tr style={{ background: "white" }}>
                    <td>2</td>
                    <td>2021 Batch Alumini Data</td>
                    <td>View</td>
                </tr>
                <tr style={{ background: "white" }}>
                    <td>3</td>
                    <td>2020 Batch Alumini Data</td>
                    <td>View</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default DataTable;