# 🧟‍♀️ React State Management Lab: Zombie Survival Team

## 📚 The goal: Practice dynamic state management using the `useState()` hook in React.

---

## ✅ Requirements

1. **Create state variables**:
   - `team` – starts as an empty array
   - `money` – starts at `100`
   - `zombieFighters` – contains all potential recruits with stats (name, price, strength, agility, image)

2. **Display all available fighters**:
   - Show image, name, price, strength, agility
   - Include an **Add** button for each

3. **Add fighters to your team**:
   - Only if you have enough money
   - Subtract the price from your budget
   - Remove the fighter from the zombieFighters list

4. **Display your team**:
   - Show fighters in the team
   - If team is empty, display “Pick some team members!”
   - Add a **Remove** button for each

5. **Remove fighters from your team**:
   - Refund their price
   - Add them back to the list of available fighters

6. **Track team stats**:
   - Show **total strength** and **total agility**
   - Use `.reduce()` to calculate values from the `team` array
   - These do **not** need to be state variables

---

## 🧠 How It Was Built

- Managed all logic inside a single `App.jsx` file
- Used `useState()` for dynamic variables
- Used `.filter()` to remove items from arrays immutably
- Used `.reduce()` to calculate live totals
- Handled click events with functions:  
  `handleAddFighter(fighter)` and `handleRemoveFighter(fighter)`
- Conditional rendering used for team display
- No state was mutated directly (React best practice)

---

## 🖼️ Features

- 💰 Tracks your **money**
- ➕ Adds fighters to your team if you can afford them
- ➖ Removes fighters and refunds their price
- 📈 Displays live **team stats** (strength & agility)
- ❗ Console warns you if you're too broke to recruit
- ⚛️ Fully reactive without needing to refresh the page

---

## 🧪 Skills Practiced

- State management with `useState()`
- Dynamic rendering in React
- Passing arguments into event handlers
- Working with arrays using `.map()`, `.filter()`, `.reduce()`
- Non-mutating React patterns

---

## 💡 What I Learned

- How to manage multiple pieces of state in one component
- How to control flow with conditions (`if`, ternaries)
- How to calculate data on the fly with `.reduce()`
- How to dynamically build and update UI with React

---

Made with mild amounts of frustration by Angela 💻 