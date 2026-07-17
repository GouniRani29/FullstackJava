/**
 * Helper utilities for the Resume Builder project
 */

// Generate a random ID for new items
export const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

// Format a date string (YYYY-MM to "MMM YYYY")
export const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  });
};

// Reorder items in a list (for work history or projects drag-reordering)
export const reorderList = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// Check if an object is empty or has all empty string values
export const isEmptyInfo = (info) => {
  if (!info) return true;
  return Object.values(info).every(val => !val || val.trim() === '');
};
