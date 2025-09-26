"use client";
import React from "react";
import Card from "./card";

const data = [
  {
    "id": 1,
    "date": "Aug 27, 2025",
    "users": 245,
    "title": "Data Science Fundamentals",
    "description": "Learn the basics of data science including Python, pandas and machine learning",
    "level": "Intermediate",
    "image": "/image.png"
  },
  {
    "id": 2,
    "date": "Aug 27, 2025",
    "users": 245,
    "title": "Data Science Fundamentals",
    "description": "Learn the basics of data science including Python, pandas and machine learning",
    "level": "Intermediate",
    "image": "/image.png"
  },
  {
    "id": 3,
    "date": "Aug 27, 2025",
    "users": 245,
    "title": "Data Science Fundamentals",
    "description": "Learn the basics of data science including Python, pandas and machine learning",
    "level": "Intermediate",
    "image": "/image.png"
  },
  {
    "id": 4,
    "date": "Aug 27, 2025",
    "users": 245,
    "title": "Data Science Fundamentals",
    "description": "Learn the basics of data science including Python, pandas and machine learning",
    "level": "Intermediate",
    "image": "/image.png"
  },
  {
    "id": 5,
    "date": "Aug 27, 2025",
    "users": 245,
    "title": "Data Science Fundamentals",
    "description": "Learn the basics of data science including Python, pandas and machine learning",
    "level": "Intermediate",
    "image": "/image.png"
  },
  {
    "id": 6,
    "date": "Aug 27, 2025",
    "users": 245,
    "title": "Data Science Fundamentals",
    "description": "Learn the basics of data science including Python, pandas and machine learning",
    "level": "Intermediate",
    "image": "/image.png"
  },
  {
    "id": 7,
    "date": "Aug 27, 2025",
    "users": 245,
    "title": "Data Science Fundamentals",
    "description": "Learn the basics of data science including Python, pandas and machine learning",
    "level": "Intermediate",
    "image": "/image.png"
  },
  {
    "id": 8,
    "date": "Aug 27, 2025",
    "users": 245,
    "title": "Data Science Fundamentals",
    "description": "Learn the basics of data science including Python, pandas and machine learning",
    "level": "Intermediate",
    "image": "/image.png"
  },
  {
    "id": 9,
    "date": "Aug 27, 2025",
    "users": 245,
    "title": "Data Science Fundamentals",
    "description": "Learn the basics of data science including Python, pandas and machine learning",
    "level": "Intermediate",
    "image": "/image.png"
  }
]



export default function SequenceLibraryPage() {
  return (
    <div className="p-6 ">
      {/* Search & Top Controls */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-1/3 px-4 py-4 border-2 border-[#EDE9F4] rounded-2xl outline-none "
        />
        <div className="flex gap-3">
          <button className="border border-purple-400 text-purple-500 rounded-full px-4 py-2 hover:bg-purple-50">
            Import Template
          </button>
          <button className="border border-purple-400 text-purple-500 rounded-full px-4 py-2 hover:bg-purple-50">
            + Create New
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
