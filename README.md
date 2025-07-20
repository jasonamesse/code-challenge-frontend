# Code Challenge

## Helpful Links

- [Star Wars API ](https://swapi.py4e.com/)
- [react](https://react.dev/)

## Details

- I want to make sure you can set up a basic front end application, and interact with an API. Mostly I just want to see how you code, and how you think about problems.
- To begin, fork this repo and push all of your commits to the fork.
- Don't spend more than a couple of hours on this. There's no hard time limit, but this isn't intended to take up your whole day.
- Don't over-engineer. This is a coding challenge, not a production application. Write clean code, but I don't need a full infrastructure - just provide the documented requirements.
- I don't care if it's in JavaScript or TypeScript. Just do what you're comfortable with.
- Please provide a sentance or two on how to start your app in your .README.
- Reach out with any questions - this isn't intended to be a gotcha. We're happy to help.

## Task

- You're going to make a super simple UI that interacts with the Star Wars API (link above). You'll be using the "People" endpoint.
- Use whatever component library or styling framework you're comfortable with. There's no limit to the tools you can use, but don't overcomplicate it.
- Make a single page that displays a list of people from the "People" endpoint. Include a few relevant attributes about each person, I'll leave it to your discretion as to which attributes you want display. Try to make the list look nice, I want to see some basic design skills. I don't have a preference as to the form the list takes (table, list, etc).
- The list should utilize the server-side pagination that the Star Wars API supports. Don't worry about searching, filtering, or sorting. I just want a basic way to navigate through the pages of people.
- Spend your time on component organization and design - those are the two things I really want to see with this challenge.

## How to Start

Run `pnpm i` to install the node modules. If your computer has any trouble running the previous command try running `npm install -g pnpm@latest-10`.
Once the node modules have been download run `pnpm start`.
You will find the app delivered at http://localhost:3000/