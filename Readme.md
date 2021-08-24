## HACKERS-XD
A safe and secure platform for whistle blowers to expose the misdeeds of organizations, secured by one of the primary fundamental of blockchain, i.e.  **anonymity.**

**Note : Dummy credentials for sign in on deployed webpage (email: someone@someone.com, password: 1)**

## Inspiration
The inspiration came from the movie Edward Snowden, that a person who is bringing out the misdeeds is debarred from his own country. And whistleblowers are always at risk of death threats, lawsuits, and harassment for a lifetime if their identity is revealed. 

## What it does
We've created a platform for whistleblowers, to connect them to media outlets without the risk of their identity being revealed. We've used Blockchain and its principle concept of anonymity to empower whistleblowers. We act as middleware between whistleblowers and media houses. 

## HOW  DO WE DO IT?
<ul>
<li>The whistleblower will be able to upload documents on our portal by paying a fee</li>
<li>Then the organization will do a free transaction of documents to the media outlet.</li>
<li>Then the media outlet's duty will be to verify if the received news is genuine or not.</li>
<li>If the news is genuine, then the media outlet will send a notification to the organization, and then the amount will be returned to the whistleblower.</li>
<li>But if the information is fake, the organization will keep the money and it will be used for technical purposes </li>
</ul>

## How to use it
For submitting information, we have a button on our homepage named : "Become a whistleblower". On clicking it one will see two buttons named Add 100 tokens and Proceed. Balance of the user will also be shown. As our web portal is based on blockchain, currently we accept our own token as a mode of transactions. For getting our token, currently, we have the feature of Add 100 tokens enabled for free. For getting tokens, one must have [Metamask](https://metamask.io/) extension in their browser, make sure to be on a test network to avoid paying real cryptocurrency as a gas fee. If you feel you have enough tokens, you can proceed further, where you first add the title of the information and pay a fee of 50 tokens. Next, you'll be redirected to the file upload portal (currently restricted to 1 file, due to limited monetary resources ). For the file verify feature, you have to sign in using the button provided on the homepage. Dummy credentials for sign in (email: someone@someone.com, password: 1)

## How we built it
First, the front end was integrated with the backend. Smart Contract was written in solidity on top of Ethereum blockchain and deployed on the remix. We connect our web application to the smart contract, using the web3 library, and are currently doing transactions using Metamask and on rinkby test network. 

## Challenges we ran into
<ul>
<li>Creating the smart contract.</li>
<li>Using web3 library to integrate the smart contract.</li>
<li>Limited time-constraint.</li>
<li>Learning and implementing new technologies in the given time constraint.</li>
</ul>

## Accomplishments that we're proud of
We've made a fully functional and deployed web app which we aimed at. On our web app, anyone can be a whistleblower, provided they have metamask and few Wei's on rinkby test network, as well as the information provided by them, can be seen on our portal and functionality of verifying it is added as well.
Note: For verifiers, they might be seeing different information at first as we only allow verifiers to see 1 information at a time, and no new information unless they have provided a verdict on the current one.

## What we learned
We learnt about integrating smart contracts using the Web3 library. Also, we learnt about deploying smart contracts on remix platform.

## What's next for AnonyMUST
<ul>
<li>Malware detection in the files.</li>
<li>Authentication using captchas.</li>
<li>Improving the smart contract to fix the loopholes</li>.
<li>Adding incentives for the users.</li>
</ul>

## Get your own copy of the project
Clone this repository in your local computer.
Command : `git clone https://github.com/Tanmay000009/whistle-blower`

Run command prompt in the local folder of project.
Make sure **node.js** is installed.

Run the command to install required npm packages :
`npm i`

Create a file named **config.env** and add your **MongoDB credentials** and ** AWS credentials**.

Run command to start the server :
`node index.js`

Server will ve started on PORT 3000. Open a browser and navigate to http://localhost:3000/ to access the server.

## Made with Love and Blockchain by
1. Abhishek Asgola
2. Riya Bansal
3. Sujana Kola
4. Tanmay Vyas
5. Soham Bhattacharjee
