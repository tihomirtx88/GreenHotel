"use client"
import { useState } from 'react';

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children?.toString().split(' ').slice(0, 40).join(' ') + (children ? '...' : '');

  return (
     <div className="space-y-3">
      <p
        className="
          text-primary-300
          leading-7
          text-base
          sm:text-lg
          transition-all
          duration-300
        "
      >
        {displayText}
      </p>

      {shouldCollapse && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="
            text-accent-400
            font-semibold
            hover:text-accent-300
            transition-colors
            underline
            underline-offset-4
          "
        >
          {isExpanded ? "Show less ↑" : "Show more ↓"}
        </button>
      )}
    </div>
  );
}

export default TextExpander;
