import React from 'react';

interface TodoFormProps {
  onAdd: (title: string) => void
}

export const Navbar: React.FC<TodoFormProps> = props => {
  return <div>Navbar</div>;
}
