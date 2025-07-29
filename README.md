# Crypto dashboard
Web application: https://crypto-dashboard-nine-steel.vercel.app/

Display a dashboard with charts that conveys information about crypto currencies; user can select among 10 top currencies that are leading the market; visualize its trending between several date ranges; visualize top 5 positive trending crypto currencies.

# Table of contents
1. [Steps](https://github.com/Kykal/crypto-dashboard/tree/main?tab=readme-ov-file#steps)
   1. [Design](https://github.com/Kykal/crypto-dashboard/tree/main?tab=readme-ov-file#design)
        1. [References](https://github.com/Kykal/crypto-dashboard/tree/main?tab=readme-ov-file#references)
        2. [Wireframe](https://github.com/Kykal/crypto-dashboard/tree/main?tab=readme-ov-file#wireframe)
   3. [Develop](https://github.com/Kykal/crypto-dashboard/tree/main?tab=readme-ov-file#develop)
        1. [Technologies](https://github.com/Kykal/crypto-dashboard/tree/main?tab=readme-ov-file#technologies)
2. [Extraofficial features](https://github.com/Kykal/crypto-dashboard/tree/main?tab=readme-ov-file#extra-official-features)
   1. [More date range data](https://github.com/Kykal/crypto-dashboard/tree/main?tab=readme-ov-file#more-date-range-data)
   2. [Quick data of top 10 leading crypto currencies](https://github.com/Kykal/crypto-dashboard/tree/main?tab=readme-ov-file#more-date-range-data)
# Steps
## Design
Figma design page: https://www.figma.com/design/WGNpOpz0X6odhltvPcqz9Y/CRYPTO-DASHBOARD?node-id=4-15&p=f
### References
- Get references of currencies/company shares dashboards

This is important because this is where ideas come from, due to missing information about how crypto currencies dashboards and shares dashboards looks like, it is a good exercise to research and get some references to apply to the project.
### Wireframe
- Make the wireframe (scrappy idea of what the web aplication should look like)

Only a very superficial idea of how the web application should look like, nothing too worked, only the concepts, comments, etc.

## Develop
### Technologies
I used several tecnologies to develop this web application, like
|Name|Version|Reason|
|-|-|-|
|react-router|7.7.1|To handle search params|
|swr|2.3.4|To handle fetch|
|zustand|5.0.6|To manage global states|
|dayjs|1.11.13|To manage date and transform them|
|@mantine/core|8.2.1|To apply styled components|
|@mantine/carousel|8.2.1||
|@mantine/charts|8.2.1|To visualize data charts|
|@mantine/dates|8.2.1||
|@mantine/hooks|8.2.1||
|@mantine/notifications|8.2.1||

# Extra official features
## More date range data
- Besides only displaying 7 days and 24 hours date range of data, sometimes the user wants to visualzie more than that, so that's why I added more options, like 1 day, 6 months, 1 year, etc.
## Quick data of top 10 leading crypto currencies
- Only displaying the selected crypto currency was a very limited choice, so that's why I added a quick-view of the same cryptos with their data, like image, symbol, name, current price, trending price, trending percentage.
