## Instructions

1:
```bash
npm run dev
```

2:
Open [http://localhost:3000](http://localhost:3000).


## Some choices I made

I went with a two column layout becaused I could see that the lists would be long and it'd be awkward to ask the visitor to scroll so far down.

I chose to display the lists alphabetically by group, because it seemed like the most natural way.

I refrained from adding any interactivity to avoid extending the time too much.

I didn't expect NextJS to offer particular benefits over plain React, which is what I know best, but I saw it's part of the stack at Beyond so I thought it was a good chance to check it out, and I saw that it had an interesting and relatively easy way of creating an API that would serve the purpose of this challenge well. Turned out to be a headache in some cases (hi, dealing with local files), but I'm glad I got a little NextJS workshop out of this.

It was also the first time I used Typescript, and that definitely hindered my progress at times, so I decided to strive to get the "product" out the door without worrying as much about code quality as I would've under less constrained circumstances.

I recycled some of the styling included in the placeholder NextJS app because it allowed me to add a pleasant design without spending time on it.

## To be improved

I would deal with a handful of Typescript warnings that I decided to ignore.

I would go through the code again to make it more efficient, clean and readable. Maybe add some tests if it made sense.

I would add some basic interactivity such as being able to see the ranking for each group of influencers, having links to their social media profiles, etc.
