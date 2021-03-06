# Project Overview

## Project Name

The Void Reviews

https://void-reviews.netlify.app/
## Project Description

Its a movie review website for horror movies strictly. 

## Wireframes

![Alt text](https://res.cloudinary.com/marssantos/image/upload/v1638457651/The%20Void%20Reviews/Screen_Shot_2021-12-02_at_9.57.42_AM_imragj.png)
![Alt text](https://res.cloudinary.com/marssantos/image/upload/v1638457650/The%20Void%20Reviews/Screen_Shot_2021-12-02_at_9.58.02_AM_tggc1a.png)
![Alt text](https://res.cloudinary.com/marssantos/image/upload/v1638464910/The%20Void%20Reviews/Screen_Shot_2021-12-02_at_12.07.56_PM_kpcwgo.png)
![Alt text](https://res.cloudinary.com/marssantos/image/upload/v1638457650/The%20Void%20Reviews/Screen_Shot_2021-12-02_at_9.57.51_AM_uqrauh.png)
![Alt text](https://res.cloudinary.com/marssantos/image/upload/v1638457646/The%20Void%20Reviews/Screen_Shot_2021-12-02_at_9.58.09_AM_wx87kq.png)


## Component Hierarchy
![Alt text](https://res.cloudinary.com/marssantos/image/upload/v1638479027/The%20Void%20Reviews/Screen_Shot_2021-12-02_at_4.03.07_PM_syvfg3.png)

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
{
    "records": [
        {
            "id": "recEXt1QqyquqPLB1",
            "fields": {
                "imgURL": "https://dl.airtable.com/.attachmentThumbnails/3c32b54c7f9684c814f2349b581aac8b/6da65e25",
                "movie": "Midsommar",
                "synopsis": "A couple travel to Sweden to visit their friend's rural hometown for its fabled midsummer festival, but what begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult."
            },
            "createdTime": "2021-12-01T18:57:41.000Z"
        },
        {
            "id": "recHcQJsZr9tEfyUa",
            "fields": {
                "imgURL": "https://dl.airtable.com/.attachmentThumbnails/5f96b40f2759f1f1c6605705fdd03171/ac594075",
                "movie": "Tusk",
                "synopsis": "A U.S. podcaster (Justin Long) ventures into the Canadian wilderness to interview an old man (Michael Parks) who has an extraordinary past, and the American learns the man has a dark secret involving a walrus."
            },
            "createdTime": "2021-12-01T19:01:40.000Z"
        },
        {
            "id": "recMVrjrEVFhUMGE5",
            "fields": {
                "imgURL": "https://dl.airtable.com/.attachmentThumbnails/374a6cd9efc76102e8055e21ca0a6bf5/69a68208",
                "movie": "Train to Busan",
                "synopsis": "A man (Gong Yoo), his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea."
            },
            "createdTime": "2021-12-01T19:01:47.000Z"
        },
        {
            "id": "recQVe2MZeNdgmxoe",
            "fields": {
                "imgURL": "https://dl.airtable.com/.attachmentThumbnails/c49df8d6f6e7c5322c037dd5fa2f1168/566c882e",
                "movie": "The Wailing",
                "synopsis": "Suspicion leads to hysteria when rural villagers link a series of brutal murders to the arrival of a mysterious stranger (Kunimura Jun)."
            },
            "createdTime": "2021-12-01T18:57:41.000Z"
        },
        {
            "id": "recTMkpy7aDqEt25v",
            "fields": {
                "movie": "The Lighthouse",
                "synopsis": "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
                "imgURL": "https://dl.airtable.com/.attachmentThumbnails/4cad2848d7aa70859a6a5a83a8ee06f1/eef00681"
            },
            "createdTime": "2021-12-01T19:28:00.000Z"
        },
```
```json
{
    "records": [
        {
            "id": "rec4qst4jpvlZKXqd",
            "fields": {
                "name": "Marilyn",
                "title": "Parasite",
                "review": "Cool!"
            },
            "createdTime": "2021-12-02T17:40:44.000Z"
        },
        {
            "id": "rec4uOyYKeo0koHCo",
            "fields": {
                "name": "Mariah",
                "title": "Insidious",
                "review": "Weird. I hated it."
            },
            "createdTime": "2021-12-02T17:40:44.000Z"
        },
        {
            "id": "recD8Lg4bd9UZs8Fw",
            "fields": {},
            "createdTime": "2021-12-02T19:16:46.000Z"
        },
        {
            "id": "recJc8WRC3b928fND",
            "fields": {
                "name": "Marni",
                "title": "Train to Busan",
                "review": "I actually cried."
            },
            "createdTime": "2021-12-02T17:40:44.000Z"
        },
        {
            "id": "rectWKIjYkIMnRkoB",
            "fields": {},
            "createdTime": "2021-12-02T19:16:45.000Z"
        },
        {
            "id": "recwubdXk099d98PE",
            "fields": {},
            "createdTime": "2021-12-02T19:16:40.000Z"
        }
    ]
}
```

### MVP/PostMVP

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP, as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Be a working, interactive React app, built using create react app.
- Utilize React Router, installed via NPM.
- Have at least 6 separate, rendered components.
- Implement an organized and understandable React file structure.
- Utilize functional components appropriately.
- Use Axios to consume data from Airtable, and GET/render that data in your components.
- Use Axios to POST/create new data on Airtable.
- Use only React for DOM Manipulation.

#### PostMVP  


- Add Edit and DELETE functions to be able to edit and delete reviews to a movie.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Approval | Complete
|July 13| Core Application Structure (HTML, CSS, etc.) | Complete
|July 14| Pseudocode / actual code | Complete
|July 15| Initial Clickable Model  | Complete
|July 16| MVP | Complete
|July 17| Presentations | Incomplete

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all parts of your app.  Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
|     ---     | :---: |  :---: | :---:  | :---:  |
| Image Links | H     | 4hrs.  | 3 hrs  | 3hrs.  |
| GET Request | H     | 4hrs   | 4 hrs  | 4hrs.  |
| Set-up React File Structure| H     | 2hrs   | 2 hrs  | 2hrs  |
| Format Comps| H     | 7hrs   | 6hrs   | 6hrs   |
| Submit Form | H     | 4hrs   | 3hrs   | 3hrs   |
| CSS Styling |Med    | 4hrs   | 8hrs   | 8hrs   |
| POST Request| H     | 4hrs   | 4hrs   | 4hrs   |
| MVP         | H     | 8hrs   | 3hrs   | 3hrs   |
| Total.      | H     | 37hrs  | 33hrs | 33hrs  |


