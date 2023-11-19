# WetterMeister Examples
[
Figma demo
](https://www.figma.com/proto/Su1mmwFzvDJgEqmUf8zqcI/Untitledmaybeworks?type=design&node-id=201-826&t=xPVzPeQc2HBUW5qn-1&scaling=scale-down&page-id=0%3A1&mode=design)


## PathFinder (Main Example)
This repository is based on the [ShadeMap examples](https://github.com/ted-piotrowski/shademap-examples/tree/main).<br>
[Demo video link](https://vimeo.com/886070995?share=copy)

## 3DMap
Generate 3D Map

## LandingPage
Interactive Sun Globe Visualisation

<img width="200" alt="image" src="https://github.com/Kisielos10/HackaTUM2023/assets/81301569/809c65e8-2d9d-439e-b43f-2eb492d8d42f">

---
# HackaTUM2023
## Inspiration
### Ever felt like **that** road home just became longer on a scorching day, or during a heavy storm? We have too. 

We believe that pedestrians deserve a safe and comfortable journey, regardless of the weather. With the rise of extreme conditions, we wanted to develop a navigation app that minimizes the risk of accidents and discomfort. Together, let's redefine efficiency, revolutionize pedestrian navigation and make Munich a safer and more enjoyable place for everyone.

## What it does
Our project is a navigation/pathfinding app specifically designed for pedestrians. It utilizes a scoring algorithm to **establish routes that prioritize safety and comfort during extreme weather** (e.g. heat waves, heavy rain). 

The app considers factors such as shade availability, proximity to water sources, and weather conditions to suggest the most optimal routes for pedestrians. 

But our app doesn't stop there - we also empower users to report incidents promptly, ensuring that authorities are quickly informed about road obstacles or hazards. 

## How we built it
We built the app using a combination of technologies. The backend was developed using JavaScript and HTML and leveraged various APIs for weather data and mapping services. User interface design was given careful attention through Figma to ensure an intuitive and user-friendly experience.

## Challenges we ran into
First and foremost, obtaining real-time weather data and designing its integration  into our potential scoring algorithm posed a complex task. In this sense, obtaining and building height data for shade calculation (our focus on the tech demo) took some effort.

## Accomplishments that we're proud of
- An interface proof of concept with user-friendly, reactive elements and covering our two user stories (navigation and incident reporting)
- A technical proof of concept for shade calculation on potential paths.

## What we learned
Throughout the development process, we learned how to integrate external APIs, specifically weather APIs, and leverage them for the calculations in our app. Lastly, through prototyping we gained insights into improving the app's user interface for a smooth and intuitive experience.

## What's next for Wettermeister
We would like to expand the app's functionality by incorporating additional weather conditions, such as snowstorms and heavy winds, as well as integrate real-time traffic data to provide users with even more accurate and timely navigation recommendations. Furthermore, it would be good to streamline the incident reporting system, ensuring that relevant parties receive quick notification and can take appropriate action promptly, as well as establish a data analysis pipeline for queries and user report to identify resilient infrastructure needs in Munich.
