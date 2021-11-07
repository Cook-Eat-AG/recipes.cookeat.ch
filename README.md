# Cook Eat Recipes!

A simple, recipe database for everyone, based (loosely) on [http://chowdown.io](http://chowdown.io). Thanks a lot for the great work Clark!

#Development locally
Everything is run in Docker for ease of not having to install anything. The docker-compose.yml is optimised for a MacOS install, some changes may need to be made for Windows/Linux.
- Install Docker (if not already done)
- Open the directory where you pulled the github repository to and run "docker compose up"
- Open your browser to localhost:4000 and you should see the site!

# Writing a Recipe

The recipes are stored in the collection "Recipes" (the folder /_recipes).
They are written in Markdown and contain a few special sections:
- The frontmatter, which contains:
 - Title, Image, and Layout (which is "recipe")
 - Ingredients (a list of things in the dish)
 - Directions (a list of steps for the dish)
- Body content (for intros, stories, written detail)

If you need help with Markdown, here's a [handy cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).