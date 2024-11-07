export const categories = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    questions: [
      {
        id: 'budget',
        text: 'What is your budget range?',
        options: ['Under ₹15,000', '₹15,000-₹30,000', '₹30,000-₹50,000', 'Above ₹50,000']
      },
      {
        id: 'priority',
        text: 'What matters most to you in a smartphone?',
        options: ['Camera Quality', 'Performance/Gaming', 'Battery Life', 'Overall Value']
      },
      {
        id: 'screen_size',
        text: 'Preferred screen size?',
        options: ['Compact (under 6.1")', 'Medium (6.1"-6.5")', 'Large (above 6.5")']
      },
      {
        id: 'brand_preference',
        text: 'Do you have any brand preference?',
        options: ['Apple', 'Samsung', 'OnePlus', 'No Preference']
      },
      {
        id: 'usage',
        text: 'How do you primarily use your phone?',
        options: ['Social Media & Basic Use', 'Photography & Content Creation', 'Gaming & Entertainment', 'Business & Productivity']
      }
    ]
  }
];