# Chaingear

This project try to solve the problem of cryptocurrencies and cryptoassets metadata.
If you are blockchain developer you can easily enrich metadata of your blockchain or token.

# API
[chaingear.cyber.fund/v1.json](chaingear.cyber.fund/v1.json)

This repository accumulate the following blockchains metadata:
- Dependencies
- Specs
- Logos
- Links
- Crowdsales

## Why do I need to add my cryptocurrency or cryptoasset?

1. Describe what it is for in understandable format.
2. Your chain on cyber•Fund for free.
3. Make your chain accessible for other developers.
4. It will make significantly easier to deal with your token for any wallet, exchange, bridge and any web app which want to work with your cryptocurrency or cryptoasset.

## Improve metadata
You can add blockchain related projects in blockchain metadata.

## How to add?
Any system that follow basic digital property requirements could be added.
This is closed list of such requirements:
- We allow listing of cryptocurrencies and cryptoassets that are **cryptoproperty compliant**.
- We allow listing of publicly traded cryptocurrencies and cryptoassets.
- We allow listing of cryptocurrencies and cryptoassets based on crowdinvesting valuation with fixed cap until cryptocurrency or cryptoasset goes to market.

### What is cryptoproperty compliance?
We are going to publish a paper soon that explain a lot of stuff. But now the following requirements exist:

###Cryptocurrency Listing:
- Should be established and uniquely identifiable via Genesis ID.
- Should have underlying internal capital - a cryptocurrency responsible for resilience of network consensus.
- Core code responsible for network consensus should be open source, buildable and executable for at least one open source operating system.

###Cryptoasset Listing:
- Should be registered using listed cryptocurrency and uniquely identifiable via Genesis ID.
- Registration protocol should be defined by a code (Counterparty, Omni, NXT AE, NXT Monetary System etc.) and/or natural language (protocol specification such as Open Assets protocol, AGS, etc.) 
- Purpose of registration should be described by a code (e.g. smart contracts), and/or natural language (e.g. Ricardian contract or signed Shareholders agreement)

###What if I have a private cryptocurrency or cryptoasset?
No problem. It could be registered using Chaingear library and will be listed in Radar. So when your brainchild will be ready to be publicly traded it will be included in Rating automagicaly. Follow [cyber•Fund Radar](https://cyber.fund/radar) listing section.

You can discuss or ask a question at [cyber•Talk Thread](http://cybertalks.org/t/rating-listing-of-cryptocurrencies-and-cryptoassets/353)

###Steps to add System in chaingear
- Clone `chaingear` repository
- Create a folder at `/chaingear/sourses`. Name of the folder should be same as a `system` name 
- Copy `example.toml` from `/chaingear/` into a folder you created
- Rename `example.toml` to a `system` name
- Fill .toml file guided by the following section
- Pull request

cyber•Fund's Team in short time will review your work and commit changes

## Specification of the .toml file
### Basic info
```toml
genesis_id = "hash_of_the_first_block" # Hash of the first block generated by system
system = "System Name"
dependencies = ["independent"] # List depending from other systems. Names of the systems you can find in `/chaingear/sourses`
icon = "system" # Name of icon without extension
```

`genesis_id` - Hash of the first block generated by system

`system` -  The unique name of a system. If there exist system with name in respect to communities please invent another name. In case of historical collisions (Bytecoin for instance) priority will have a system with older genesis date. Newer system will be excluded until renamed. Go to a `/chaingear/sourses` to explore systems names or type in a Search at [cyber.fund](https://cyber.fund/)

`dependencies` - Specify dependencies on other systems. 
- For Independent Systems which runs on their own blockchain should be `independent`
- For Systems wich use blockchains of other systems you should specify names of that systems. Names of the systems you can find in `/chaingear/sourses`

`icon` - The name of image of a system logotype without extension (for example `icon` = `"bitcoin"`)

Put image file in to a `/chaingear/logos` folder.
Image requirements:
- file should be .png
- background should be transparent
- file name should be exact of system name
- image should be square
- image should have resolution between 256x256 and 1024x1024


### Token
```toml
[token]
token_name = "token_name"
token_symbol = "token_ticker"
```


### Consensus
```toml
[consensus]
consensus_type = "Consensus Type" // `Proof-of-Work`, `Proof-of-Stake`, `Delegated Proof-of-Stake`, `Hybrid POS-POW`, `Federated Consensus`, `Blockchain Ledger`
consensus_name = "Consensus Name" 
hashing = "Encryption Name"

```

### Descriptions
```toml
[descriptions]
state = "Running"
headline = "A brief description of not more than 140 symbols or tagline"
hashtag = "#example"
system_type = "DAO" # can be DAO, DApp 
page_state = "draft" # can be "draft" or "ready"
tags = ["DAO"]
```

`system_type` - Choose a system type from a classification below:
- Independent System - Secured by decentralized consensus protocols. Examples: Bitcoin, Ripple, Ethereum, BitShares.
- Decentralized Application - Secured by independent systems. Tokens have internal value. No central emission point. Examples: Counterparty, GetGemz, Factom.
- Pegged Asset - Secured by independent system and pegged to a value of real world assets: fiat currencies, shares, indexes… Examples: BitUSD, Tether, NuBits, Ripple issued BitstampUSD, CoinoUSD or even Ethercoin. Though they could have very different nature: CFDs, IOUs or whatever else, we feel that it is more natural to group them into one class: Pegged Assets.
- Ownership Title - To this class belong systems where transaction (e.g. a transfer of money) by itself proves your ownership rights for what you expect to receive.. Examples: AGS, Neucoin or Ethereum before launch.
- Blockchain Share - These are blockchain securities, e.g. shares, that give you rights to receive dividends: Coinomat. That could be shares that promise you tokens in the future: SAFE Network or Synereo. Tokens don’t have internal value without counterparty. It is a reason why blockchain shares usually bear a counterparty risk.

For better understanding this classification read cyber•Fund blog post[Do Your Own Reserch](https://blog.cyber.fund/do-your-own-research-with-cyber-fund-d751d65925e0)


### Aliases
```toml
coinmarketcap = "Bitcoin"
nickname = "Bitcoin"
```

### Specs
```toml
[specs]
rpc = "8332"
block_time = 600
block_reward = 50
halfing_cycle = 210240
total_tokens = 21000000
premine_tokens = 0
difficulty_cycle = "2016"
txs_confirm = 6
```

### Ratings
```toml
[ratings]
rating_cyber = 0
```

### Events
```toml
[[events]]
name = "Event Name"
start_date = "2015-03-31T00:00:00"
end_date = "2015-03-31T00:00:00"
url = "http://event_link.com"
```

### Links

```toml
[[links]]
type = "website"
name = "Name of the site"
url = "http://example.com"
rss = "http://example.com/rss_url"
icon = "website.png" # If empty default picture for a type
tags = ["Main"]
```
Standard links. Automatic icons
Supported for link types:
 - website [ "Main", "Apps" ]
 - paper [ "Main", "Apps" ]
 - wallet [ "Main", "Apps" ]
 - explorer [ "Main", "Apps" ]
 - wiki [ "Apps" ]
 - github [ "Apps" ]
 - twitter [ "Apps" ]
 - reddit [ "Apps" ]
 - blog [ "Apps" ]
 - forum [ "Apps" ]
 - code
 - exchange

# How to add crowdsale?
Crowdsale consist of 2 steps:
- Before the start. We recommend to add this information at least a month before ETA.
- After the finish. We recommend to add this information in an hour after finish.

## Basic Due Diligence
We don't accept crowdfunding if certain condition didn't met:

- At least one genesis address exist. We don't accept crowdfunding if investors could not transparently track funds.
- Fund management is at least under 2 of 3 multisig. Fund managers could be anonymous, but some reputation inside community is highly recommended. Otherwise, well written paper or POC code eliminates any questions.
- Funding terms are defined and cryptographically signed by fund managers.
To add crowdfunding put this data to toml file of your system.

## Before
```toml
[crowdsales]
start_date = "2015-03-31T00:00:00"
end_date = "2015-05-15T00:00:00"
genesis_address = ["35gLt5EgB367enjSjyEDahhWWcy6p1MGf6"] # Could be array. See multu currency crowdsale
funding_url = "https://koinify.com/#/project/FACTOM"
funding_tems = "http://blog.factom.org/post/115139137794/the-factoid-software-sale-is-live"
min_investment = 0.01
funding_operator = "Koinify" # Could be `nein`.
crowsale_feed = "http://example.com/feed" # For multi currency or non bitcoin crowdsale
```
Note that all fields are mandatory.

## After
Then crowdsale is finished two liner report is needed.
```toml
tokens_sold = 4379973
tokens_issued = 8759946
btc_raised = 3500
```

## Fixed Cap Calculation
After end of crowdsale your cap will be calculated automatically based on 4 fields: `start_date`, `end_date`, `min_invesment` and `genesis_address`. Thus your project will become visible in [Rating](https://cyber.fund) with fixed cap until tokens (1) won't be distributed and (2) at least one public market will be established.

## Multi Currency Crowdsale
You can provide multiple addresses as array: `["address1", "address2"]`.
At this point of time we support only Bitcoin addresses for crowdsale calculations. For multi currency crowdsale or non bitcoin crowdsale you will need to provide pre calculated feed.


## Independent system
```toml
# This is a TOML document.

[document]
system = "Ethereum" # type: string
genesis_id = "null" # type: string

# Descriptive data
[descriptions]
symbol = "ETH" # type: string
currency = "ether" # type: string
short_description = "A Next-Generation Smart Contract and Decentralized Application Platform" # type: string
summary = "Ethereum is a community-driven project aiming to decentralize the internet and return it to its democratic roots. It is a platform for building and running applications which do not need to rely on trust and cannot be controlled by any central authority." # type: string
coinmarketcap = "Ethereum" # type: string

type = "DAO" # type: string
consensus = "Ethereum" # type: string

[dependencies] # type: string. Independent if empty.

[links]
name = "web site" # type: string
url = "http://ethereum.org/" # type: string
type = "website" # type: string
tags = [ "Main", "Apps" ] # type: string
icon = "ethereum.png" # optional. If empty default picture for a type

[crowdsales]
start_date = "22/7/2014" # type: date
end_date = "2/9/2014" # type: date
genesis_address = "36PrZ1KHYMpqSyAQXSG8VwbUiq2EogxLo2" # type: string
funding_tems = "https://www.ethereum.org/pdf/TermsAndConditionsOfTheEthereumGenesisSale.pdf" # type: string
funding_operator = "null" # type: string
funding_url = "https://www.ethereum.org/ether" # type: string
tokens_sold = 60102216 # type: number

[ratings]
rating_cyber = 5 # temporary. type: number

```

## Bitcoin Case
```
genesis_id = "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
system = "Bitcoin"

[token]
token_name="bitcoin"
token_symbol = "BTC"

[dependencies]
# If epmty - "independent"

[descriptions] # mapped as strings
headline = "Bitcoin is an innovative payment network and a new kind of money" # type: string
description = "Bitcoin is an innovative payment network and a new kind of money." # type: string
system_type = "blockchain"
state = "live"
hashtag = "#bitcoin"
tags = ["whale", "dao"]

[aliases] # used for matching
coinmarketcap = "Bitcoin"

[consensus]
consensus_type = "Proof-of-Work"
consensus_name = "Bitcoin Proof-of-Work"
hashing = "SHA-256d"

[specs] # mapped as number
rpc = 8332 # RPC port
p2p = null # p2p port
block_time = 600 # the number of seconds required for generating a block
block_reward = 50 # the number of tokens received as a reward for the found block
halfing_cycle = 210240
difficulty_cycle = 2016
txs_confirm = 6 # the number of confirmations required to record transactions in the block
mint_confirm = 120
total_tokens = 21000000 # the number of tokens that will ever be generated
premine_tokens = 0 # the number of premined tokens

[events] # mapped as dates
announcement = "31/10/2008"
genesis = "03/01/2009"

[ratings]
rating_cyber = 5 # temporary. type: number
```
