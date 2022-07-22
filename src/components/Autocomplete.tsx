import React, { useEffect, useState } from 'react';
import Styles from './autocomplete.module.css';

type IAutoComplete = {
  items: any[];
  value: string;
  selected: any;
  onChange: (text: string) => void;
  onSelect: (selected: any) => void;
}

const debounce = (callback: Function, wait: number) => {
  let timeoutId: any = null;
  return (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

const AutoComplete = (props: IAutoComplete) => {
  const [suggestions, setSuggestions] = useState<any>([]);
  const [displayItems, setDisplayItems] = useState<boolean>(false);

  const loadUsers = (text: string) => {
    let matches = [];
    if (text.length) {
      const regexFilter = new RegExp(`${text}`, 'gi');
      matches = props.items.filter(usr => usr.email.match(regexFilter));
    }

    setSuggestions(matches);
    setDisplayItems(!!matches.length);
  }

  useEffect(() => {
    if (props.value) { loadUsers(props.value); }
  }, []);

  const handleOnChange = (text: string) => {
    /*
      Debouncing to avoid unnecessary re-fetching
    */
    debounce(loadUsers.bind(this, text), 500)();
    props.onChange(text);
  }

  const handleOnSelect = (selected: any) => {
    props.onSelect(selected);
    setDisplayItems(false);
  }

  return (
    <div className={Styles.Autocomplete_Container}>
      <input
        placeholder="Enter value"
        value={props.value}
        onChange={(ev) => handleOnChange(ev.target.value)}
        className={Styles.Autocomplete_Input}
        onFocus={() => {}/*handleOnChange(props.value)*/}
      />

      {
        displayItems && (
          <ul className={Styles.AutoComplete_List}>
            {
              suggestions && suggestions.length > 0 && suggestions.map((i: any) =>(
                <li
                  key={i.id} className={Styles.AutoComplete_List_Item}
                  onClick={() => handleOnSelect(i)}
                >
                  { i.first_name }
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default AutoComplete;
