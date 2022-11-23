import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// Extend vitest with all js-dom matchers (support functions)
expect.extend(matchers);
