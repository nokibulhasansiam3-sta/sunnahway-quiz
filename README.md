# Sunnahway Quiz Questions

Quiz questions repository for Sunnahway Islamic App. Questions are loaded dynamically from this repository to keep the app size small and allow easy updates.

## 📚 Available Categories

### Active Quiz Categories
- **quran_basic.json** (250KB) - Basic Quran knowledge questions
- **hadith_knowledge.json** (123KB) - Hadith and Sunnah questions
- **sirat_biography.json** (98KB) - Prophet's biography questions
- **khulafaye_rashedin.json** (408KB) - Rightly Guided Caliphs questions
- **islamic_history.json** (15KB) - Islamic history questions
- **fiqh_jurisprudence.json** (365KB) - Islamic jurisprudence questions
- **general_knowledge.json** (260KB) - General Islamic knowledge

## 🎯 Purpose

This repository serves as a remote data source for the Sunnahway app's quiz feature. By hosting quiz questions on GitHub:

- ✅ **Smaller App Size** - Reduces app bundle size by ~1.5MB
- ✅ **Easy Updates** - Update questions without releasing new app version
- ✅ **Instant Availability** - Users get new questions immediately
- ✅ **Version Control** - Track changes and maintain question history
- ✅ **Offline Support** - App includes fallback to local assets

## 📝 JSON Format

Each quiz file follows this structure:

```json
{
  "category": "Category Name",
  "displayName": "Display Name in Bengali",
  "description": "Category description",
  "questions": [
    {
      "id": "unique_id",
      "question": "Question text in Bengali",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correctAnswer": 0,
      "explanation": "Explanation text (optional)"
    }
  ]
}
```

## 🔄 How It Works

1. **App Launch** - App attempts to load questions from this GitHub repository
2. **Caching** - Successfully loaded questions are cached in memory
3. **Fallback** - If GitHub is unavailable, app uses local bundled assets
4. **Updates** - When you update questions here, users get them on next app launch

## 🚀 Usage in App

The app loads questions using raw GitHub URLs:

```
https://raw.githubusercontent.com/nokibulhasansiam3-sta/sunnahway-quiz/main/[filename].json
```

### Code Implementation

```dart
// quiz_repository.dart
static const String githubBaseUrl =
    'https://raw.githubusercontent.com/nokibulhasansiam3-sta/sunnahway-quiz/main/';

// Load questions from GitHub with fallback to local assets
final response = await http.get(Uri.parse('$githubBaseUrl$fileName'));
if (response.statusCode == 200) {
  // Use GitHub data
  raw = response.body;
} else {
  // Fallback to local assets
  raw = await rootBundle.loadString(asset);
}
```

## 📊 Statistics

- **Total Categories**: 7
- **Total Size**: ~1.5 MB
- **Total Questions**: 5000+ (approximate)
- **Languages**: Bengali (primary)

## 🛠️ Updating Questions

### Add New Questions
1. Edit the relevant JSON file
2. Add new question objects to the `questions` array
3. Commit and push changes
4. Users will receive new questions on next app launch

### Modify Existing Questions
1. Find the question by its `id`
2. Update the question text, options, or correct answer
3. Commit and push changes
4. Changes will be available immediately

### Add New Category
1. Create new JSON file with proper structure
2. Add to this repository
3. Update app code to include new category
4. Release app update with new category support

## 🔒 Data Integrity

- All questions are reviewed before publishing
- JSON files are validated for proper structure
- Backup copies maintained in app's local assets
- Version control ensures question history is preserved

## 📱 App Integration

This repository is integrated with:
- **App**: Sunnahway Islamic App
- **Platform**: Flutter (iOS & Android)
- **Loading**: HTTP requests with caching
- **Fallback**: Local assets included in app bundle

## 🌐 Access

- **Repository**: Public (required for raw file access)
- **API**: GitHub Raw Content API
- **Rate Limit**: GitHub's standard rate limits apply
- **Availability**: 99.9% uptime (GitHub's SLA)

## 📞 Support

For questions or issues:
- Create an issue in this repository
- Contact app developers
- Check app logs for loading errors

## 📄 License

Questions are curated for educational purposes. Please use responsibly.

---

**Last Updated**: October 2025  
**Maintained By**: Sunnahway Development Team  
**App Version**: Compatible with all versions
