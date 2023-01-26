import React, { memo } from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { SetState } from '../utils/types';

interface SeedInputProps {
  seed: string;
  setSeed: SetState<string>;
}

function SeedInput({ seed, setSeed }: SeedInputProps) {
  const updateSeed = (newSeed: string) => {
    if (Number(newSeed) < 0) {
      setSeed('0');
    } else if (Number(newSeed) > 9999999999) {
      setSeed('9999999999');
    } else {
      setSeed(newSeed);
    }
  };

  return (
    <div className="d-flex mt-3">
      <Form.Label column sm="2" className="me-2">
        Seed
      </Form.Label>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id="seed">
            Any integer you want from 0 to 9 999 999 999
          </Tooltip>
        }
      >
        <Form.Control
          id="seed-input"
          type="number"
          value={seed}
          onChange={({ target }) => updateSeed(target.value)}
        />
      </OverlayTrigger>
    </div>
  );
}

export default memo(SeedInput);
