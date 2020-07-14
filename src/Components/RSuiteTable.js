import React from 'react';
import { Icon, Input, InputGroup, Table } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const { Column, HeaderCell, Cell } = Table;

const RSuiteTable = (props) => {
  const { onSearchClick, dataTable, onRowClick, onDeleteClick, handleSearchChange } = props;
  return (
    <div className="list-items">
      <div>
        <h4>Danh sách sản phẩm</h4>
        <InputGroup>
          <Input
            placeholder="Tìm kiếm theo ID, Name, Note, Price ..."
            onChange={value => handleSearchChange(value)}
          />
          <InputGroup.Button
            color="blue"
            onClick={() => onSearchClick()}>
            <Icon icon="search" /> Tìm kiếm
          </InputGroup.Button>
        </InputGroup>

      </div>
      <Table className="table"
        autoHeight
        minHeight={200}
        width={700}
        data={dataTable}
        onRowClick={(data) => onRowClick(data)} >

        <Column width={100} >
          <HeaderCell className="header-cell">ID</HeaderCell>
          <Cell dataKey="idItem" />
        </Column>

        <Column width={200} >
          <HeaderCell className="header-cell">Name</HeaderCell>
          <Cell dataKey="nameItem" />
        </Column>

        <Column width={200} >
          <HeaderCell className="header-cell">Note</HeaderCell>
          <Cell dataKey="noteItem" />
        </Column>

        <Column width={90} >
          <HeaderCell className="header-cell" align="center">Price</HeaderCell>
          <Cell dataKey="priceItem" align="right" />
        </Column>

        <Column width={100} >
          <HeaderCell className="header-cell" align="center">Action</HeaderCell>
          <Cell align="center">
            {(rowData, rowIndex) => {
              return <div className="button-table" >
                <button onClick={() => onDeleteClick(rowIndex)}
                > Delete </button>
              </div>
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  )
}

export default RSuiteTable;