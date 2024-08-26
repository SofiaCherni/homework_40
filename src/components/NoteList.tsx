import { Component, ReactNode } from 'react';

interface NoteListProps {
  children?: ReactNode;
}

class NoteList extends Component<NoteListProps> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default NoteList;
