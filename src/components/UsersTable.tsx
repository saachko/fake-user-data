import React from 'react';
import { Table } from 'react-bootstrap';
import { v4 } from 'uuid';

import { tableHeadings } from '../utils/constants';
import { User } from '../utils/interfaces';

interface UsersTableProps {
  users: User[];
}

function UsersTable({ users }: UsersTableProps) {
  return (
    <Table responsive="lg" striped className="mt-4">
      <thead>
        <tr>
          {tableHeadings.map((heading) => (
            <th key={heading.id}>{heading.headingName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => (
          <tr key={v4()}>
            <td>{index + 1}</td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UsersTable;
