import React from 'react';
import { Button } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

import { csvHeadings } from '../utils/constants';
import { User } from '../utils/interfaces';

interface CsvButtonProps {
  users: User[];
}

function CsvButton({ users }: CsvButtonProps) {
  return (
    <Button className="mt-3">
      <CSVLink
        headers={csvHeadings}
        data={users}
        filename="user-data.csv"
        enclosingCharacter=" "
        className="text-white no-text-decoration fs-md"
      >
        Export user data to CSV
      </CSVLink>
    </Button>
  );
}

export default CsvButton;
