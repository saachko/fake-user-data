import React, { useState } from 'react';
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { iconStyle } from '../utils/constants';
import { SetState } from '../utils/types';

interface MistakesInputProps {
  mistakes: string;
  setMistakes: SetState<string>;
}

function MistakesInput({ mistakes, setMistakes }: MistakesInputProps) {
  const [inputMistakes, setInputMistakes] = useState(mistakes);

  const increaseMistakes = () => {
    if (Number(mistakes) < 10) {
      const newMistakes = (Number(mistakes) + 0.25).toFixed(2);
      setMistakes(newMistakes.toString());
      setInputMistakes(newMistakes.toString());
    }
  };

  const decreaseMistakes = () => {
    if (Number(mistakes) > 0) {
      const newMistakes = (Number(mistakes) - 0.25).toFixed(2);
      setMistakes(newMistakes.toString());
      setInputMistakes(newMistakes.toString());
    }
  };

  const checkInputMistakes = (value: string) => {
    if (Number(value) > 1000) {
      setMistakes('1000');
      setInputMistakes('1000');
    } else if (Number(value) < 0) {
      setMistakes('0.00');
      setInputMistakes('');
    } else {
      setMistakes(value);
      setInputMistakes(value);
    }
  };

  return (
    <div className="d-flex flex-column mt-2">
      <Form.Label column className="me-2 align-self-end">
        The number of mistakes
      </Form.Label>
      <div className="d-flex flex-row justify-content-end">
        <Button
          style={{ borderRadius: '5px 0 0 5px' }}
          onClick={decreaseMistakes}
        >
          <AiOutlineMinus style={iconStyle} />
        </Button>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="mistakes-slider">max 10</Tooltip>}
        >
          <Form.Control
            readOnly
            type="text"
            className="pe-0"
            style={{ width: '15%', borderRadius: '0' }}
            value={
              Number(mistakes) > 10 ? '------' : Number(mistakes).toFixed(2)
            }
          />
        </OverlayTrigger>
        <Button
          style={{ borderRadius: '0 5px 5px 0' }}
          onClick={increaseMistakes}
        >
          <AiOutlinePlus style={iconStyle} />
        </Button>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="mistakes">max 1000</Tooltip>}
        >
          <Form.Control
            type="number"
            className="ms-2 without-arrows"
            style={{ width: '20%' }}
            value={inputMistakes}
            onChange={({ target }) => {
              checkInputMistakes(target.value);
            }}
          />
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default MistakesInput;
