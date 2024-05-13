import React from 'react';
import Button from './Button';
import Box from './Box';

export default function App() {
  return (
    <div>
      <Button size="big" />
      <Button size="small" />
      <Box size="big" />
      <Box size="small" />
    </div>
  );
}