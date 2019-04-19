import React, { Component } from 'react';

class SquadSelectMenu extends Component {

  render () {
    return (
      <AutoComplete
        floatingLabelText="Type your squad name"
        filter={AutoComplete.fuzzyFilter}
        dataSource={this.state.SQUAD_NAMES}
        maxSearchResults={15}
        onUpdateInput={this.handleChangeSquadMenu}
        ref={`autoComplete`}
        fullWidth={true}
      />
    )
  }
};
export default SquadSelectMenu
