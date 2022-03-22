# Image search react

This project is a simple react app with the purpose of demonstrating a simple
tag based search algorithm.

All images were taken from [wallhaven](https://www.wallhaven.cc) using their API

The app allows the user to search for specific tags using the following syntax:

* SPACE (' ') character means AND
* DASH ('-') character means NOT
* PIPE ('|') character means OR
* PARENTHESIS ('()') characters can be used to structure the query
* Every other character is considered a tag.

Plus some other intuitive rules.

This repository comes with a text (WIP) and video (WIP) tutorial to follow along in order to
understand the code written for the search engine.