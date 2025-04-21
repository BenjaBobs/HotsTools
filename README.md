# Welcome to [Hots Tools](https://benjabobs.github.io/HotsTools)

This little project is meant as an informative tool for [Heroes of the Storm](https://heroesofthestorm.com/en-us/) drafting.
It's possible because some nice people have provided an easy way to get data on the heroes, be sure to check them out:

- [https://github.com/HeroesToolChest](https://github.com/HeroesToolChest)

There are currently two things to do in [Hots Tools](https://benjabobs.github.io/HotsTools).

### Hero Overview

You can check out the playable heroes currently in [Heroes of the Storm](https://heroesofthestorm.com/en-us/).
I've tried to do a very naïve analysis on keywords of their abilities and stats to provide an overview of what they are good at.
Hopefully this will be helpfull in understanding each heroe's value.

### Draft Simulator

The draft simulator works mostly as you'd expect.
You pick a draft mode (first/last pick) and a map, and then you ban/pick heroes from each team.

The _heroes_ tab is for selecting heroes.

The _analysis_ tab shows the (naïve) analysis for each team.

# How to run locally

Clone the repo

Install the dependencies: `bun install`

Compile the hero data from the latest patch: `bun run compile-data`

Start development server: `bun dev`

# Questions?

### How often is this updated?

Check the [changelog](/HotsTools/changelog)
