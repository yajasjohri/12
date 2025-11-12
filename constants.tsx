import React from 'react';
import type { Story, TimelineEvent } from './types';
import HeartIcon from './components/icons/HeartIcon';
import CalendarIcon from './components/icons/CalendarIcon';
import GiftIcon from './components/icons/GiftIcon';

// Automatically pick up to 5 images from the `photos/` folder using Vite's glob.
// Place your images (jpg, jpeg, png, webp, svg) into `One-Year-Anniversary/photos/`.
// You can change captions in `captionOverrides` below; filenames are discovered
// automatically so you only need to add/remove files in the folder.
const photoEntries = Object.entries(
  (import.meta as any).glob('./photos/*.{jpg,jpeg,png,webp,svg}', { eager: true, as: 'url' })
) as Array<[string, string]>;

// Sort by filename so the order is predictable (alphabetical).
photoEntries.sort((a, b) => a[0].localeCompare(b[0]));

// Extract URLs and take first five images
const photoUrls = photoEntries.map(([_, url]) => url).slice(0, 5);

// Edit these captions to change what displays for each photo (index matches photoUrls).
export const captionOverrides: string[] = [
  'day I made you mine',
  'prettiest eyes',
  'fav photo',
  'cutest',
  'fatest couple',
];

export const stories: Story[] = photoUrls.map((url, i) => ({
  id: i + 1,
  imageUrl: url,
  caption: captionOverrides[i] || `Photo ${i + 1}`,
  date: '',
}));

// -- TIMELINE SECTION --
// Replace dates, titles, and descriptions for the timeline highlights.
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    icon: <HeartIcon className="w-8 h-8" />,
    date: 'June 16, 2024',
    title: 'Our First Text',
    description: 'The simple “hello” that became the beginning of forever.',
  },
  {
    id: 2,
    icon: <CalendarIcon className="w-8 h-8" />,
    date: 'August 2, 2024',
    title: 'First Meet',
    description: 'The moment our eyes met and everything felt meant to be.',
  },
  {
    id: 3,
    icon: <GiftIcon className="w-8 h-8" />,
    date: 'October 5, 2024',
    title: 'Our Journey Began',
    description: 'The day it all started. A simple hello turned into a beautiful story.',
  },
];