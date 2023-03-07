import React, { memo } from 'react';
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

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

  const generateSeed = () => {
    const min = 0;
    const max = 9999999999;
    const randomSeed = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    setSeed(randomSeed.toString());
  };

  return (
    <div className="d-flex mt-3">
      <Form.Label column sm="2">
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
      <Button className="w-75 ms-3" onClick={generateSeed}>
        Random seed
      </Button>
    </div>
  );
}

export default memo(SeedInput);
