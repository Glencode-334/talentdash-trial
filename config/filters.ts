export interface FilterOption {
  label: string;

  options: string[];
}

export const filters: FilterOption[] = [
  {
    label: "Role",

    options: [
      "All Roles",
      "Frontend Engineer",
      "Backend Engineer",
      "Full Stack Engineer",
      "Mobile Engineer",
      "DevOps Engineer",
      "Data Engineer",
      "Machine Learning Engineer",
      "Staff Engineer",
      "Engineering Manager",
    ],
  },

  {
    label: "Experience",

    options: [
      "All Levels",
      "0-2 Years",
      "3-5 Years",
      "5-8 Years",
      "8+ Years",
    ],
  },

  {
    label: "Location",

    options: [
      "All Locations",
      "Bangalore",
      "Hyderabad",
      "Pune",
      "Remote",
      "Delhi NCR",
      "Chennai",
      "Mumbai",
    ],
  },

  {
    label: "Company",

    options: [
      "All Companies",
      "Google",
      "Amazon",
      "Meta",
      "Microsoft",
      "Netflix",
      "Flipkart",
      "Swiggy",
      "Zomato",
      "Uber",
      "Adobe",
    ],
  },
];