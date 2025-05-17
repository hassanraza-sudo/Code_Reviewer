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
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_LANGUAGES.map((language) => (
          <SelectItem key={language.id} value={language.id}>
            {language.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}