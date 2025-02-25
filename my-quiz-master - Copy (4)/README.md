# User Story: Angular Quiz Game - "Quiz Master"

## Overview:

- "Quiz Master" is an Angular-based quiz game where players select a category, answer questions, and track their scores. It demonstrates the integration of Angular's core features like components, routing, directives, and dependency injection. The game is hosted as a Single Page Application (SPA).

## Gameplay:

1. Landing Page:
   - The user lands on a homepage with a list of quiz categories.
   - The categories are displayed dynamically using \*ngFor.
   - Upon selecting a category, the user is navigated to the quiz screen for that category.
2. Quiz Play:
   - The selected category loads a series of questions fetched from a local JSON file (mock data).
   - Each question is displayed with multiple answer choices.
   - Players can:
     - Select an answer using buttons.
     - Proceed to the next question after answering.
   - Feedback (correct/incorrect) is shown after each answer, with dynamic styles applied using ngClass.
3. Results Screen:
   - After completing the quiz, the player is shown their score.
   - Players can:
     - Replay the quiz.
     - Navigate back to the homepage to choose a different category.
4. Routing:
   - The game uses Angular Routing:
     - /categories: Displays available quiz categories.
     - /quiz/:category: Displays questions for the selected category.
     - /results: Displays the final score.

## Detailed Explanation of Game Mechanics:

1. Routing Configuration:

   - The app is structured into three main routes:
     - CategoriesComponent: Displays a list of categories.
     - QuizComponent: Manages questions for a selected category.
     - ResultsComponent: Shows the final score.

2. Components:

   - CategoriesComponent: Uses \*ngFor to display categories. Clicking a category navigates to the quiz.
   - QuizComponent: Displays one question at a time, with multiple answer buttons and feedback styling.
   - ResultsComponent: Shows the player's score and options to replay or return to categories.

3. Local Data:

   - Questions and categories are stored in a mock questions.json file. Data is fetched using HTTP and displayed dynamically.

4. Directives and Pipes:

   - Built-in directives like *ngIf and *ngFor are used for conditional rendering and looping.
   - Custom pipes format the score display dynamically.

5. Dependency Injection:
   - The QuizService fetches data from the questions.json file and is injected into the components.

# Angular Project Structure

```
    src/
    ├── app/
    │   ├── categories/
    │   │   ├── categories.component.ts
    │   │   ├── categories.component.html
    │   │   ├── categories.component.css
    │   ├── quiz/
    │   │   ├── quiz.component.ts
    │   │   ├── quiz.component.html
    │   │   ├── quiz.component.css
    │   ├── results/
    │   │   ├── results.component.ts
    │   │   ├── results.component.html
    │   │   ├── results.component.css
    │   ├── app-routing.module.ts
    │   ├── app.module.ts
    │   ├── app.component.ts
    │   ├── app.component.html
    ├── assets/
    │   ├── questions.json
```
