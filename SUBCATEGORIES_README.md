# Quiz Sub-Categories Structure

এই repository তে প্রতিটি sub-category এর জন্য আলাদা folder এবং quiz file আছে।

## Folder Structure

```
sunnahway-quiz/
├── categories.json                 # Main categories list with subcategories
│
├── sirat_biography/               # সীরাত ও জীবনী
│   ├── sirat_childhood.json          # জন্ম ও শৈশব
│   ├── sirat_youth_marriage.json     # যৌবন ও বিবাহ
│   ├── sirat_prophethood.json        # নবুওয়াত প্রাপ্তি
│   ├── sirat_battles.json            # যুদ্ধ ও সন্ধি
│   ├── sirat_hijrah_madinah.json     # হিজরত ও মদীনা
│   ├── sirat_miracles.json           # মুজিযা ও নিদর্শন
│   ├── sirat_family_companions.json  # পরিবার ও সাহাবা
│   ├── sirat_character.json          # চরিত্র ও আখলাক
│   └── sirat_farewell_death.json     # বিদায় হজ্জ ও ওফাত
│
├── khulafaye_rashedin/           # খুলাফায়ে রাশেদীন
│   ├── khalifa_abu_bakr.json     # আবু বকর (রা.)
│   ├── khalifa_umar.json         # উমর (রা.)
│   ├── khalifa_uthman.json       # উসমান (রা.)
│   └── khalifa_ali.json          # আলী (রা.)
│
├── islamic_history/              # ইসলামিক ইতিহাস
│   ├── history_jaheli.json       # জাহেলি যুগ
│   ├── history_nabawi.json       # নবুবী যুগ
│   ├── history_khulafa.json      # খুলাফায়ে রাশেদীন যুগ
│   ├── history_umayyad.json      # উমাইয়া খিলাফত
│   ├── history_abbasid.json      # আব্বাসীয় খিলাফত
│   ├── history_ottoman.json      # উসমানীয় খিলাফত
│   └── history_andalusia.json    # আন্দালুসিয়া
│
└── fiqh_jurisprudence/           # ফিকহ ও আইনশাস্ত্র
    ├── fiqh_salah.json           # নামাজের বিধান
    ├── fiqh_zakat.json           # যাকাতের বিধান
    ├── fiqh_fasting.json         # রোজার বিধান
    └── fiqh_marriage.json        # বিবাহ ও পারিবারিক বিধান
```

## Quiz File Format

প্রতিটি quiz file এর format:

```json
{
  "category_id": "sirat_makkah",
  "category_name": "মক্কী জীবন",
  "total_questions": 50,
  "questions": [
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
  ]
}
```

## Field Descriptions

- **category_id**: Sub-category এর unique ID (categories.json এর সাথে match করতে হবে)
- **category_name**: Sub-category এর নাম (বাংলায়)
- **total_questions**: মোট প্রশ্ন সংখ্যা
- **questions**: প্রশ্নের array
  - **id**: প্রশ্নের unique ID
  - **question**: প্রশ্নের text
  - **options**: 4টি option এর array
  - **correct_answer**: সঠিক উত্তরের index (0-3)
  - **explanation**: (Optional) উত্তরের ব্যাখ্যা

## How to Add New Questions

1. সঠিক folder এ যান
2. সঠিক sub-category file খুলুন
3. `questions` array তে নতুন question object যোগ করুন
4. `total_questions` count update করুন
5. Commit এবং push করুন

## Notes

- প্রতিটি sub-category তে minimum 15টি প্রশ্ন থাকতে হবে (কারণ app এ 15/25/40 option আছে)
- প্রশ্ন যোগ করার সময় `id` unique রাখুন
- সব প্রশ্নে 4টি option থাকতে হবে
- `correct_answer` index 0 থেকে শুরু হয় (0 = প্রথম option, 1 = দ্বিতীয় option, ইত্যাদি)
