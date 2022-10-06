# schedule

## Description

Developign I developed was a work day schedulel to allow users to plan out the tasks of their day. Within this the scheudle was broken up by hour into 8 section labeled 9-5. Through out the day the scheudle will update the user about where they are at in the day. Any time slot that is in the past will be in grey, the present hour will be red, and the fututre hours will be in green. Don't worry about your tasks dispperating once you save a task it will remain their until you remove it.

Keeping track of an 8 hour day and the pace at which you need to move through out your day can be a chellenge. This schedule not only helps you plan your day but let you knwo if you are on track by the hour.

I was able to do this by refrencing the moment() function too get up to date dates and time. Once that is done you need to establish an if function for each hour to let it knwo what color it need to be depending on if its in the past, present, or future. By using By using jquery and Javascript tools I coudl save the inputs into local storge saving them to the site for the users convenience.

## Deployment Link

https://mrwaynejames.github.io/schedule/

## Usage

To create a task simply click within the textbox area in the hour you want to create a task. The text box will be colorcoded eiter grey,red, or green.

Once you have added your task. Click the blue save button to the right of the textbox that you filled out to lock your task their until you remove it. You can remove it simply by clicking back in to the box where the task is and backspacing on your keyboard.

(images/scheduler.png)

## License

MIT License

Copyright (c) [2022] [Jack McWilliams]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.