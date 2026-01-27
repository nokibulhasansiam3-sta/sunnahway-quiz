# Quiz File Format Guide

## 📋 File Structure

প্রতিটি quiz file এ এই structure follow করতে হবে:

```json
{
  "category_id": "unique_id",
  "category_name": "ক্যাটাগরির নাম",
  "total_questions": 20,
  "questions": [...]
}
```

## 📝 Question Format

প্রতিটি question এ এই fields থাকতে হবে:

```json
{
  "id": 1,
  "question": "প্রশ্নের text এখানে লিখুন?",
  "options": [
    "প্রথম অপশন",
    "দ্বিতীয় অপশন",
    "তৃতীয় অপশন",
    "চতুর্থ অপশন"
  ],
  "correct_answer": 1,
  "explanation": "উত্তরের ব্যাখ্যা এখানে লিখুন।"
}
```

## 🔑 Field Descriptions

### Root Level:
- **category_id**: Sub-category এর unique ID (categories.json এর সাথে match করতে হবে)
- **category_name**: Sub-category এর নাম (বাংলায়)
- **total_questions**: মোট প্রশ্ন সংখ্যা (questions array এর length এর সমান)

### Question Level:
- **id**: প্রশ্নের unique ID (1 থেকে শুরু, sequential)
- **question**: প্রশ্নের text (বাংলায়)
- **options**: 4টি option এর array (সবসময় 4টি থাকতে হবে)
- **correct_answer**: সঠিক উত্তরের index
  - `0` = প্রথম option
  - `1` = দ্বিতীয় option
  - `2` = তৃতীয় option
  - `3` = চতুর্থ option
- **explanation**: (Optional কিন্তু recommended) উত্তরের ব্যাখ্যা

## ✅ Rules & Guidelines

### 1. Minimum Questions:
- প্রতিটি sub-category তে **minimum 15টি** প্রশ্ন থাকতে হবে
- Recommended: 20-50টি প্রশ্ন

### 2. Question IDs:
- প্রতিটি প্রশ্নের ID unique হতে হবে
- 1 থেকে শুরু করে sequential order এ রাখুন
- Example: 1, 2, 3, 4, ...

### 3. Options:
- সবসময় **ঠিক 4টি** option থাকতে হবে
- Options এর length প্রায় সমান রাখার চেষ্টা করুন
- সঠিক উত্তর randomly distribute করুন (সবসময় option 1 না)

### 4. Correct Answer Index:
- **0-based indexing** ব্যবহার করুন
- প্রথম option = 0
- দ্বিতীয় option = 1
- তৃতীয় option = 2
- চতুর্থ option = 3

### 5. Explanation:
- প্রতিটি প্রশ্নে explanation দেওয়া ভালো
- সংক্ষিপ্ত কিন্তু informative রাখুন
- Reference দিতে পারেন (যেমন: সহীহ বুখারী, সূরা নাম ইত্যাদি)

## 📖 Example - Complete Question

```json
{
  "id": 1,
  "question": "নবী মুহাম্মদ (সা.) কত বছর বয়সে নবুওয়াত প্রাপ্ত হন?",
  "options": [
    "৩৫ বছর",
    "৪০ বছর",
    "৪৫ বছর",
    "৫০ বছর"
  ],
  "correct_answer": 1,
  "explanation": "নবী মুহাম্মদ (সা.) ৪০ বছর বয়সে হেরা গুহায় নবুওয়াত প্রাপ্ত হন।"
}
```

## 🚫 Common Mistakes

### ❌ Wrong:
```json
{
  "id": "1",              // ❌ String instead of number
  "question": "...",
  "options": ["A", "B"],  // ❌ Only 2 options
  "correct_answer": 4,    // ❌ Index out of range (0-3 only)
  "explanation": ""       // ❌ Empty explanation
}
```

### ✅ Correct:
```json
{
  "id": 1,                // ✅ Number
  "question": "...",
  "options": ["A", "B", "C", "D"],  // ✅ 4 options
  "correct_answer": 1,    // ✅ Valid index (0-3)
  "explanation": "..."    // ✅ Meaningful explanation
}
```

## 📂 File Naming Convention

File names should match the category_id:
- `sirat_makkah.json` → category_id: "sirat_makkah"
- `khalifa_umar.json` → category_id: "khalifa_umar"
- `history_umayyad.json` → category_id: "history_umayyad"

## 🔄 Updating total_questions

যখন নতুন প্রশ্ন যোগ করবেন, **total_questions** count update করতে ভুলবেন না:

```json
{
  "category_id": "sirat_makkah",
  "category_name": "মক্কী জীবন",
  "total_questions": 25,  // ← Update this when adding questions
  "questions": [
    // ... 25 questions here
  ]
}
```

## 📌 Quick Checklist

প্রতিটি quiz file commit করার আগে check করুন:

- [ ] `category_id` সঠিক এবং unique
- [ ] `total_questions` = questions array এর length
- [ ] প্রতিটি question এ unique ID আছে
- [ ] সব question এ ঠিক 4টি option আছে
- [ ] `correct_answer` index 0-3 এর মধ্যে
- [ ] Explanation দেওয়া আছে
- [ ] Minimum 15টি প্রশ্ন আছে
- [ ] JSON syntax valid (no trailing commas, proper quotes)

## 🎯 Example File

`sirat_makkah.json` file টি দেখুন - এটি একটি complete example যেখানে 20টি প্রশ্ন আছে।
