import React from 'react';
import { ChevronDown } from 'lucide-react';

const Select = ({ children, value, onValueChange, ...props }) => {
  return (
    <div className="relative" {...props}>
      {React.Children.map(children, child => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, { value, onValueChange });
        }
        return child;
      })}
    </div>
  );
};

const SelectTrigger = React.forwardRef(({ className, children, value, onValueChange, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <>
      <button
        ref={ref}
        className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover text-popover-foreground shadow-md">
          {React.Children.map(props.children, child => {
            if (child.type === SelectContent) {
              return React.cloneElement(child, { 
                onSelect: (selectedValue) => {
                  onValueChange(selectedValue);
                  setIsOpen(false);
                }
              });
            }
            return child;
          })}
        </div>
      )}
    </>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = ({ placeholder, className, ...props }) => (
  <span className={className} {...props}>{placeholder}</span>
);

const SelectContent = ({ className, children, onSelect, ...props }) => (
  <div className={`max-h-60 overflow-auto p-1 ${className || ''}`} {...props}>
    {React.Children.map(children, child => {
      if (child.type === SelectItem) {
        return React.cloneElement(child, { onSelect });
      }
      return child;
    })}
  </div>
);

const SelectItem = React.forwardRef(({ className, children, value, onSelect, ...props }, ref) => (
  <div
    ref={ref}
    className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className || ''}`}
    onClick={() => onSelect(value)}
    {...props}
  >
    {children}
  </div>
));
SelectItem.displayName = "SelectItem";

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };