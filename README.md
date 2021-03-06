# Card-Game
Game of 4 players trying their luck to make the best possible hand of playing cards. The order of ranking of card hands are as follows:
```
	1. If all cards are same eg. K, K, K.
	2. If all three cards are making straight sequence eg. 10, 9, 8.
	3. If two out of three cards are same eg. K, 2, 2.
	4. Highest card will be taken eg. K, 8, 3.
	5. If the highest card is same, then second highest will be taken or else last card will be the decider.
	6. If players got all card same, then it will be a tie.
```

## Frontend tools & technologies 

- [React](https://facebook.github.io/react/)
- [Redux](https://redux.js.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Redux-Thunk](https://www.npmjs.com/package/redux-thunk)
- [Axios](https://alligator.io/react/axios-react/)
- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [ECMA Script ES7](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)


## Backend tools & technologies

- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) 
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Maven-Repository](https://mvnrepository.com/)
- [Eclipse IDE](https://www.eclipse.org/)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
- [Git](https://git-scm.com/)

## Table of Contents

- [Install Node](#install-node)
- [Create React App](#create-react-app)
- [Create Spring Boot App](#create-spring-boot-app)
- [About the Project](#about-the-project)
  - [Clone or Download Project](#clone-or-download-project)
  - [Run The Application](#run-the-application)
- [Understanding the Java Code Structure](#understanding-the-java-code-structure)
  - [Unit Test Cases](#unit-test-cases)
  

## Install Node
For development, you will only need Node.js and a node global package, Yarn, installed in your environement.
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0
    
 ## Create React App

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create react-app my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.

## Create Spring Boot App

For development, you will only need JDK 1.8 installed in your environement.<br>
Just go on [official spring boot website](https://start.spring.io/) and generate either maven or gradle project. Open the project in Eclipse Ide.<br>
Your folder structure must be like this:
```
Project Folder  
|--- src/main/java    
     |--- com/example/app
          |--- dao
          |--- model
          |--- controller
          |--- services
          |--- repositories
```
## About the Project

A fullstack application with Java and React including frameworks and libraries. Let's explore the application step-by-step.

### `Clone or Download Project`
Clone the project from [here](https://github.com/bajaj29/Card-Game) using 'git clone "repository path"' in git bash console.
  
### `Run The Application`
- Open java source code in Eclipse Ide and build the project to download required dependencies. Run the project with click on "Run as Java Application".<br><br>
![alt img](https://lh3.googleusercontent.com/proxy/VWTUQHj2FCKEMIJONhRwgH7zeZm0UiWM3ro0Juk6fWuXL4RwSK-lWubJ5B4tWd8dm9ij5V69AvwnJanYjX7MUg7-PjGfNy46lZ5wG6KiuO8BUKT-EBBr-JA87Y8z6022f0xFeE1VCQ) <br><br>
- Open react project in Visual Studio Code and give command "npm install" in terminal to install required node packages. Run the application by giving command "npm start" in terminal.<br><br>
![alt img](https://blog.jetbrains.com/wp-content/uploads/2017/01/webstorm-cra-app-is-running.png)<br><br>
- After successfull run of the server, chrome page will open with [http://localhost:3000](http://localhost:3000)<br><br>
![alt img](https://github.com/bajaj29/Card-Game/blob/master/card-images/main-page.png)<br><br>
- Enter the players name in the given fields and click start.<br><br> 
![alt img](https://github.com/bajaj29/Card-Game/blob/master/card-images/players-entry.png)<br><br>
- Page will route to [http://localhost:3000/table](http://localhost:3000/table). Click "Check" to display cards on the table.<br><br>
![alt img](https://github.com/bajaj29/Card-Game/blob/master/card-images/table.png)<br><br>
- After cards displayed, click "Result" to display the winner.<br><br>
![alt img](https://github.com/bajaj29/Card-Game/blob/master/card-images/card-check.png)<br><br>
- Once Winner declared, we can either do on click "Next Hand" to continue the game with new random cards distributed or exit game on click "Exit".<br><br>
  - With click of "New Hand" :
  ![alt img](https://github.com/bajaj29/Card-Game/blob/master/card-images/winner.png)<br><br>
  - New random cards will be displayed :
  ![alt img](https://github.com/bajaj29/Card-Game/blob/master/card-images/next-hand.png)<br><br>
  - With click of "Exit" :
  ![alt-img](https://github.com/bajaj29/Card-Game/blob/master/card-images/exit.png)<br><br>
  
## Understanding the Java Code Structure

Our java source code folder structure looks like this <br>

```
cardgame  
|--- src/main/java
|     |--- com/example/cardgame
|          |--- CardgameApplication.java
|          |--- model  
|          |    |--- CardException.java
|          |    |--- Cards.java
|          |    |--- Player.java
|          |--- controller
|          |    |--- CardController.java
|          |--- service 
|               |--- CardService.java
|
|--- src/test/java
     |--- com/example/cardgame
          |--- CardgameApplicationTests.java
```

- Class [`CardException.java`](https://github.com/bajaj29/Card-Game/blob/master/cardgame/src/main/java/com/example/cardgame/model/CardException.java) : To handle the exception thrown during the api call. <br>

- Class [`Cards.java`](https://github.com/bajaj29/Card-Game/blob/master/cardgame/src/main/java/com/example/cardgame/model/Cards.java) : To serialize the data as an object of having generated random cards with players name. <br>

- Class [`Player.java`](https://github.com/bajaj29/Card-Game/blob/master/cardgame/src/main/java/com/example/cardgame/model/Player.java) : Gives us the details of winning player (eg. id, name, rank of cards, cards of the player).

- Class [`CardController.java`](https://github.com/bajaj29/Card-Game/blob/master/cardgame/src/main/java/com/example/cardgame/controller/CardController.java) : It is the rest controller which receives the request from the client side and gives back response. Controller method contains following api 
  - `api/cardgame/cards` : To get the random cards generated by service class and gives as response to client.
  - `api/cardgame/result` : To get the winning player or list of winning players from service class and gives response as list of object [`Player.java`](https://github.com/bajaj29/Card-Game/blob/master/cardgame/src/main/java/com/example/cardgame/model/Player.java) to client.
- Class [`CardService.java`](https://github.com/bajaj29/Card-Game/blob/master/cardgame/src/main/java/com/example/cardgame/service/CardService.java) : Logic written here for getting random cards, calculating the highest possible card hand among the players and giving response to controller class [`CardController.java`](https://github.com/bajaj29/Card-Game/blob/master/cardgame/src/main/java/com/example/cardgame/controller/CardController.java).

### `Unit Test Cases`

[Mockito](https://site.mockito.org/) is a mocking framework, JAVA-based library that is used for effective unit testing of JAVA applications.<br>
Set up an Eclipse Project with JUnit and Mockito frameworks.<br>
  - Class [`CardgameApplicationTests.java`](https://github.com/bajaj29/Card-Game/blob/master/cardgame/src/test/java/com/example/cardgame/CardgameApplicationTests.java) : Created single unit test case to handle all (distributing the random cards from suffled deck and giving the result with highest possible hand).<br>
  ```
    when(mockCardService.getcards()).thenReturn(cardList);
		List<String> actualCardList = mockCardController.getCards();
		assertEquals(cardList.size(), actualCardList.size());
  ```
   Here we are mocking [`CardService.java`](https://github.com/bajaj29/Card-Game/blob/master/cardgame/src/main/java/com/example/cardgame/service/CardService.java) class using mockito java library, So that it will return the desired cards.<br>
   Card List : List of random cards distributed from the deck.<br>
   For our testing, we can give hard coded values to the card list which we are doing by mocking the service method. So that we can get the expected output from the controller method.<br>
   
   ```
    List<Player> actualWinnerList = cardController.getResult(cards);
		assertEquals(winner.size(), actualWinnerList.size());
    for(int i = 0; i < winner.size(); i++) {
			assertEquals(winner.get(i).getId(), actualWinnerList.get(i).getId());
			assertEquals(winner.get(i).getHandRank(), actualWinnerList.get(i).getHandRank());
			assertEquals(winner.get(i).getHand().size(), actualWinnerList.get(i).getHand().size());
			for(int j = 0; j < winner.get(i).getHand().size(); j++) {
				assertEquals(winner.get(i).getHand().get(j), actualWinnerList.get(i).getHand().get(j));
			}
		}
    
    cards: We are passing in controller method above is object of list of cards and list of player names.<br>
  
    private List<String> cardList = new ArrayList<String>() {
      {
        add("3H");
        add("AS");
        add("2S");
        add("2H");
        add("AD");
        add("8D");
        add("7C");
        add("10D");
        add("7H");
        add("KD");
        add("6S");
        add("KH");
        add("JD");
      }
    };
    
    In above cardList, strings which we are adding is like "3H". So first index denotes number on the card (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K) and last index denotes suite.
    
    H = heart,
    C = Club,
    D = Diamond,
    S = Spade
	
    private List<String> namesList = new ArrayList<String>() {
      {
        add("Player1");
        add("Player2");
        add("Player3");
        add("Player4");
      }
    };
	
    private Cards cards = new Cards(cardList, namesList);
   
    ExpectedOutput : Controller method will give us list of "Player.java" object.
    ActualOutput : Actual output we can design according to cards list we are passing. So for now 
    
	    private List<Player> winner = new ArrayList<Player>() {
	      {
		add(new Player(1, "A",new ArrayList<Integer>() {
		  {
		    add(3);
		    add(2);
		    add(1);
		  }
		}, 2))
	      }
	    }
