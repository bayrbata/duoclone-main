<br />
## Setup and Installation

### Option 1: Run with Mock Data (No Backend Required)

1. Clone the project using `git clone <repository-url>`
2. Run `npm i`
3. Run `npm run dev` - The app will automatically use mock data when no backend is configured

**Note:** When `VITE_API_URL` is not set or empty, the app automatically uses mock/dummy data. No backend or database is required!

### Option 2: Run with Backend

1. Clone the project using `git clone <repository-url>`
2. Run `npm i`
3. Create a `.env` file in the root directory:
   ```
   VITE_API_URL=http://localhost:8080
   VITE_GOOGLE_CLIENT_ID=your-google-client-id
   ```
4. Adjust the src/constants/paths.ts API paths as needed
5. Run `npm run dev`

## Features

- Courses, Sections, and Units
- Google OAuth
- Caching with Tanstack Query
- Fill in the blank exercises
- Translate the sentence exercises
- Leaderboards
- Lesson Accuracy
- Scroll to current lesson button
- Popovers and Modals
- Skipping lessons
- Profiles and Avatars
- Follow System
- Streaks
- Daily Quests & Monthly Challenges

## Technologies Used

- React
- Typescript
- TailwindCSS
- Tanstack Query
- Framer Motion
- Spring Boot (backend)
- MySQL (database)

## Structure and Notes

### **Content Hierarchy**
Course → Section → Unit → Lesson → Exercise

### **Mutations (POST REQUESTS)**

Mutations can be found under src/queries/mutations

**There are 4 main mutations:**
| Mutation | Hook |
| ----------- | ----------- |
| Submitting an exercise attempt | useSubmitExercise |
| Submitting a lesson completion | useLessonComplete |
| Changing course | useChangeCourse |
| Follow / Unfollow | useFollowUser |

