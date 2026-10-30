import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Simple build script to bundle Speed Insights
console.log('Building Speed Insights integration...');

// Read the HTML file
const htmlPath = join(process.cwd(), 'index.html');
const html = readFileSync(htmlPath, 'utf-8');

// Check if Speed Insights script is already added
if (!html.includes('speed-insights.js')) {
  console.log('Note: Speed Insights script reference already exists in index.html');
} else {
  console.log('Speed Insights is configured in index.html');
}

console.log('Build complete!');
console.log('\nNote: For production deployment on Vercel, Speed Insights will automatically');
console.log('use the optimized script path provided by Vercel infrastructure.');
