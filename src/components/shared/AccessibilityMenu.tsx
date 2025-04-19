
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Accessibility } from 'lucide-react';

const AccessibilityMenu = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState([16]);
  
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast-mode');
  };
  
  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value);
    document.documentElement.style.fontSize = `${value[0]}px`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center p-2 text-gray-700 hover:text-supportBlue-500 focus:outline-none focus:ring-2 focus:ring-supportBlue-500 rounded-md" aria-label="Accessibility options">
          <Accessibility className="h-5 w-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Accessibility Options</h3>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast" className="cursor-pointer">High Contrast Mode</Label>
            <Switch 
              id="high-contrast" 
              checked={highContrast}
              onCheckedChange={toggleHighContrast}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="font-size">Font Size</Label>
              <span className="text-sm text-gray-500">{fontSize[0]}px</span>
            </div>
            <Slider
              id="font-size"
              min={12}
              max={24}
              step={1}
              value={fontSize}
              onValueChange={handleFontSizeChange}
            />
          </div>
          
          <div className="pt-2 border-t">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <span role="img" aria-label="Info">ℹ️</span>
              <p>These settings will be saved for your current session.</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityMenu;
