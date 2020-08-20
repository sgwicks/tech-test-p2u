import React, { useState } from 'react';
import {
  DropdownButton,
  DropdownOption,
  DropdownList
} from '../styles/DropdownStyles';

const Dropdown = () => {
  const [isVisible, toggleIsVisible] = useState(false)
  const [options] = useState(['GBP', 'USD', 'AUD', 'EUR'])
  const [option, updateOption] = useState('GBP')
  
  const handleHover = (event, bg, text) => {
    event.target.style.background = bg;
    event.target.style.color = text;
  };

  const handleClick = () => {
    toggleIsVisible(!isVisible)
  };

  const handleDropdownLeave = () => {
    toggleIsVisible(false)
  };

    return (
      <>
        <DropdownButton
          onClick={handleClick}
          onMouseLeave={handleDropdownLeave}
          >
          {option}
          {isVisible && (
            <DropdownList>
              {options.map((option, i) => {
                return (
                  <li key={`option-${i}`}>
                    <DropdownOption
                      onClick={() => updateOption(option)}
                      onMouseEnter={(event) =>
                        handleHover(event, 'blue', 'white')
                      }
                      onMouseLeave={(event) => handleHover(event, '', '')}>
                        {option}
                    </DropdownOption>
                  </li>
                )
              })}
            </DropdownList>
          )}
        </DropdownButton>
      </>
    );
  
  
}
export default Dropdown;