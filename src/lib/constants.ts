import { Language } from '@/types';

export const SUPPORTED_LANGUAGES: Language[] = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'python', name: 'Python' },
  { id: 'java', name: 'Java' },
  { id: 'csharp', name: 'C#' },
  { id: 'cpp', name: 'C++' },
  { id: 'go', name: 'Go' },
  { id: 'rust', name: 'Rust' },
  { id: 'php', name: 'PHP' },
  { id: 'ruby', name: 'Ruby' },
  { id: 'swift', name: 'Swift' },
  { id: 'kotlin', name: 'Kotlin' },
];

export const DEFAULT_CODE_JAVASCRIPT = `// Example JavaScript function
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// Test with a large number
const num = 10;
console.log(\`Factorial of \${num} is \${calculateFactorial(num)}\`);`;

export const DEFAULT_CODE_PYTHON = `# Example Python function
def calculate_factorial(n):
    if n == 0 or n == 1:
        return 1
    
    result = 1
    for i in range(2, n + 1):
        result *= i
    
    return result

# Test with a large number
num = 10
print(f"Factorial of {num} is {calculate_factorial(num)}")`;