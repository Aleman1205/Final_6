import React from 'react';
import Button from '../ui/Button';

interface QuickReplyProps {
  text: string;
  onClick: () => void;
}

const QuickReply: React.FC<QuickReplyProps> = ({ text, onClick }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="text-sm whitespace-nowrap"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default QuickReply;