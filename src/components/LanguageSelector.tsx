import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SUPPORTED_LANGUAGES } from '@/lib/constants';

interface LanguageSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function LanguageSelector({ value, onValueChange }: LanguageSelectorProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className="w-full  flex items-center justify-center sm:w-[200px] rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-20 px-3 py-2 text-sm shadow-sm transition-colors duration-200 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
      >
        <SelectValue placeholder="Select language" />
      </SelectTrigger>

      <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm rounded-md shadow-lg">
        {SUPPORTED_LANGUAGES.map((language) => (
          <SelectItem
            key={language.id}
            value={language.id}
            className="cursor-pointer px-3 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            {language.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
