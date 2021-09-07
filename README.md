# kril-cm-api

> Disclaimer: I created this wrapper because I needed the transactional module. I decided to add all the endpoints from the documentation but I couldn't test all of them since I didn't have permission. Feel free to contribute :D

This library uses Campaign Monitor API v3.2

## Getting started

```shell
npm install kril-cm-api
```

usage

```javascript
import { Transactional } from 'kril-cm-api'

try {
  const apiKey = 'xxx='
  const transactional = new Transactional({ apiKey })
  const data = await transactional.getStatistics()
  console.log(data)
} catch (err) {
  console.log(err)
}
```

> If you are using javascript don't forget to add @ts-check at the top of your file for a better experience

## Modules

[Campaign Monitor API](https://www.campaignmonitor.com/api) documentation.

| Module        | Description                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Account       | Gives you access to core account information.                                                                           |
| Campaigns     | Covers all the campaign related functionality including creating draft campaigns, selecting recipients and sending.     |
| Clients       | Contains all the functionality you need to manage the clients in your account                                           |
| Journeys      | Covers read-only journey functionality including viewing all journeys, journey summary, and detailed journey reporting. |
| Lists         | Covers all your list management needs.                                                                                  |
| Segments      | Segments allow you to create targeted sub-groups of subscribers based on conditions you set.                            |
| Subscribers   | Everything you need to work with subscribers in your account.                                                           |
| Templates     | Templates make it easy for your clients to send great looking emails by just adding their own content.                  |
| Transactional | Transactional emails are triggered by your own site or app, typically in response to a user's action                    |
