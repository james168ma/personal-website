---
title: 'My Experience at YHack 2020'
date: '2020-11-19'
---
### It's been about a week since YHack 2020 ended...

*...and about three months since I've last made a post...*

So I've decided to take the time to talk about my first virtual hackathon experience.

First off, the hackathon lasted from Saturday until Friday, which was nice, because we
were given a pretty good amount of time to build something. However, at the same time, I
was also blessed with a perfect gift package from my Operating Systems class (in the form of
a 24 hour long assignment about syncronization and locks). So, technically my time window
to work on the hackathon was from Monday to Friday, which still, admittedly, was pretty nice.
My teammates, unfortunately, were also blessed with the same blessing as I had and were
occupied with their own assignments. 

Thankfully, by Monday, we were able to come up with an idea for what we should make: Tinder 2.0.
*Well*, not actually a copy of Tinder, but something that would allow for people to match/swipe/chat. 
We decided to tackle one of the specific prize challenges, which was to make something that would 
bring people closer together during times of COVID19 isolation. The main idea of our web app was 
to simulate meeting new people in real life, without the inherent bias of judging people by the
way they looked. The way we implemented our idea was to allow users to upload a bio consisting
of up to 10 words (to simulate how little you would know about a person when you first met them) 
and a single picture that was not of themselves (to take away the visual bias).

After coming up with our idea, we then split up our tasks and started getting to work. I first
added some base styling to our web app by selecting to use React-Bootstrap, a really simple and
easy-to-use front end framework for React. Then, I constructed our basic routing structure for the
application using React Router. After that, I built our conversation management system, where users
could access all their previous conversations. I decided to use the Cloud Firestore NoSQL database 
from Google Firebase to store all the conversations that users had. After that, I implemented real-time
messaging, to allow users to actively chat with their matches. To do that, I created a collection
of messages in each conversation and added each new message sent by users to the Firestore database. In order to
retrieve the messages in real time, I used react-firebase-hooks to automatically update the page whenever
the database was updated. As a finishing touch, I pieced together the chat UI using indivdual React-Bootstrap
components and made it look nice.

In the end, I was pretty proud of what I made and was glad to have my teammates pull their wieght in
the other parts of the app (especially in user authentication and matching users together).

Unfortunately, we were not able to win a prize, but I would definitely consider what I learned
(React, Firebase, etc.) a pretty good consolidation prize. :)

Here's a [link](https://devpost.com/software/clique-a3zdwr) to the Devpost page for the project.