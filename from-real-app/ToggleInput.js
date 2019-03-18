import React, { Component } from 'react';
import { Text } from 'react-native';
import ToggleBox from 'react-native-togglebox';
import { List, ListItem, Radio, Right } from 'native-base';

export type ToggleInputProps = {
  label: string,
  onPress: Function,
  selected: string,
  choices: Object,
  styles: Object,
};

export default class ToggleInput extends Component<ToggleInputProps, *> {
  constructor(props) {
    super(props);
    this.toggleBox = React.createRef();
  }

  componentDidUpdate() {
    if (this.toggleBox.state.expanded) {
      this.toggleBox.toggle();
    }
  }

  shouldComponentUpdate(nextProps: Object) {
    return (
      this.props.selected != nextProps.selected ||
      JSON.stringify(this.props.choices) != JSON.stringify(nextProps.choices)
    );
  }

  render() {
    const { onPress, choices, label, styles, selected } = this.props;
    const codes = Object.keys(choices);

    return (
      <ToggleBox
        label={label}
        value={choices[selected]}
        style={styles || {}}
        ref={c => (this.toggleBox = c)}
      >
        <List>
          {codes.map(code => (
            <ListItem key={code} onPress={() => onPress(code)}>
              <Text>{choices[code]}</Text>
              <Right>
                <Radio selected={code == selected} />
              </Right>
            </ListItem>
          ))}
        </List>
      </ToggleBox>
    );
  }
}
