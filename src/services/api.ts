// import { CodeAnalysisResult, FeedbackCategory, FeedbackItem } from '@/types';

// // This is a placeholder function to simulate API call
// // In a real application, this would make an actual API request
// export const submitCodeForReview = async (
//   code: string,
//   language: string
// ): Promise<CodeAnalysisResult> => {
//   console.log(`Submitting code for review. Language: ${language}`);

//   // Simulate network delay
//   await new Promise((resolve) => setTimeout(resolve, 1500));

//   // Mock response data
//   const mockSyntaxItems: FeedbackItem[] = [
//     {
//       id: 'syntax-1',
//       message: 'Missing semicolon at the end of statement',
//       line: 5,
//       column: 12,
//       severity: 'warning',
//       suggestion: 'Add a semicolon at the end of the line',
//       code: 'result = 1',
//     },
//     {
//       id: 'syntax-2',
//       message: 'Unnecessary semicolon',
//       line: 8,
//       column: 20,
//       severity: 'info',
//       suggestion: 'Remove the semicolon',
//       code: 'let i = 0;;',
//     },
//   ];

//   const mockPerformanceItems: FeedbackItem[] = [
//     {
//       id: 'perf-1',
//       message: 'Consider using a more efficient algorithm',
//       severity: 'info',
//       suggestion: 'For large values, consider using a recursive approach with memoization',
//       code: 'function calculateFactorial(n) { ... }',
//     },
//     {
//       id: 'perf-2',
//       message: 'Potential performance bottleneck in loop',
//       line: 7,
//       severity: 'warning',
//       suggestion: 'Consider pre-allocating memory if the array size is known',
//       code: 'for (let i = 2; i <= n; i++) { ... }',
//     },
//   ];

//   const mockSecurityItems: FeedbackItem[] = [
//     {
//       id: 'sec-1',
//       message: 'Input validation missing',
//       severity: 'error',
//       suggestion: 'Validate that n is a positive integer before processing',
//       code: 'function calculateFactorial(n) { ... }',
//     },
//   ];

//   const mockBestPracticesItems: FeedbackItem[] = [
//     {
//       id: 'bp-1',
//       message: 'Consider adding JSDoc comments',
//       severity: 'info',
//       suggestion: 'Add JSDoc comments to document function parameters and return values',
//       code: 'function calculateFactorial(n) { ... }',
//     },
//     {
//       id: 'bp-2',
//       message: 'Use const for variables that don\'t change',
//       line: 6,
//       severity: 'info',
//       suggestion: 'Change let to const for variables that are not reassigned',
//       code: 'let result = 1;',
//     },
//     {
//       id: 'bp-3',
//       message: 'Add error handling for edge cases',
//       severity: 'warning',
//       suggestion: 'Add checks for negative numbers and handle them appropriately',
//       code: 'function calculateFactorial(n) { ... }',
//     },
//   ];

//   const mockCategories: FeedbackCategory[] = [
//     {
//       id: 'syntax',
//       title: 'Syntax',
//       items: mockSyntaxItems,
//     },
//     {
//       id: 'performance',
//       title: 'Performance',
//       items: mockPerformanceItems,
//     },
//     {
//       id: 'security',
//       title: 'Security',
//       items: mockSecurityItems,
//     },
//     {
//       id: 'best-practices',
//       title: 'Best Practices',
//       items: mockBestPracticesItems,
//     },
//   ];

//   const mockResult: CodeAnalysisResult = {
//     categories: mockCategories,
//     summary: 'The code has some minor syntax issues and could benefit from performance optimizations and better error handling.',
//   };

//   return mockResult;
// };

import axios from "axios";

const API_URL = "http://localhost:5000";

export const getReview = async (code: string, language: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/review`, {
      code,
      language,
    });

    // Return only the data part of the response
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.message || "Unknown error");
  }
};
