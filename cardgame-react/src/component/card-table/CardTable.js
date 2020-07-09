import React, { Component } from 'react'
import './CardTable.css'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { getCards, getResult, addImages, clearData } from './CardTableAction';
import { connect } from 'react-redux';
import MainPage from '../main-page/MainPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Store from '../redux/Store';
var CardBack = require('../cards-png/red_back.png');
var wallImage = require('../cards-png/playing_card_wall.jpg');
var CardBack = require('../cards-png/red_back.png');
var winImage = require('../cards-png/winner.png');

class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            showCheck: true,
            showResult: false,
            showNewHand: false,
            showLeave: false
        };
        
        this.handleCheck = this.handleCheck.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleResult = this.handleResult.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.createFrontCardDiv = this.createFrontCardDiv.bind(this);
        this.createBackCardDiv = this.createBackCardDiv.bind(this);
    }

    componentDidMount() {
        this.distributeCards();
    }

    getWinnerName(){
        var winners = Store.getState().cardTable.winners
        var winnerName = ''
        
        if(winners.length === 1){
            winnerName = winners[0].name + ' Wins'
        }
        else {
            for(var i = 0; i < winners.length; i++){
                if(i !== 0) {
                    winnerName = winnerName + ', ' + winners[i].name
                }
                else winnerName = winners[i].name
            }
            winnerName = winnerName +' Ties'
        }
        return(
            <h2 style={{color: "green"}}>{winnerName}</h2>
        )
    }

    getWinnersHand(){
        var winners = Store.getState().cardTable.winners
        var hands = []
        var sortedhand = winners[0].hand
        sortedhand.sort(function(a, b){return b - a})
        for(var i=0; i< 3; i++){
            switch(sortedhand[i]){
                case 1:
                    hands.push('Ace') 
                    break
                case 2:
                    hands.push('Two') 
                    break
                case 3:
                    hands.push('Three') 
                    break
                case 4:
                    hands.push('Four') 
                    break
                case 5:
                    hands.push('Five') 
                    break
                case 6:
                    hands.push('Six') 
                    break
                case 7:
                    hands.push('Seven') 
                    break
                case 8:
                    hands.push('Eight') 
                    break
                case 9:
                    hands.push('Nine') 
                    break
                case 10:
                    hands.push('ten') 
                    break
                case 11:
                    hands.push('Jack') 
                    break
                case 12:
                    hands.push('Queen') 
                    break
                case 13:
                    hands.push('King') 
                    break
                case 14:
                    hands.push('Ace') 
                    break
            }
        }
        var handName = ''
        if(winners[0].handRank === 1){
            handName = 'With all cards same of ' + hands[0]
        }
        else if(winners[0].handRank === 2){
            handName = 'With straight sequence of ' + hands[0] + ', ' + hands[1] + ', ' + hands[2]
        }
        else if(winners[0].handRank === 3){
            handName = 'With pair of ' + (hands[0]!==hands[1] ? hands[1] : hands[0]) + ' and ' + (hands[0] !== hands[1] ? hands[0] : hands[2])
        }
        else if(winners[0].handRank === 4){
            handName = 'With highest card of ' + hands[0]+ ', ' + hands[1] + ' and ' + hands[2]
        }
        return (
            <p style={{color: "green"}}>{handName}</p>
        )
    }

    handleResult() {
        const cardList = Store.getState().cardTable.cards
        const names = Store.getState().main
        const nameList = []
        nameList.push(names.player1)
        nameList.push(names.player2)
        nameList.push(names.player3)
        nameList.push(names.player4)
        console.log(nameList)
        const card = {
            cards : cardList,
            names : nameList
        }
        this.setState({
            showCheck: false,
            showResult: false,
            showNewHand: true
        })
        this.props.getResult(card)
    }

    distributeCards() {
        this.props.getCards(); 
    }

    handleCheck() {
        const {cards} = this.props.cardTable
        var imageList = []
        for(var i = 0; i < cards.length; i++){
            imageList.push(require("../cards-png/" + cards[i] + ".png"))
        }
        this.props.addImages(imageList)

        this.setState({
            check: true,
            showResult: true,
            showCheck: false,
            showNewHand: false,
        })
    }

    createFrontCardDiv(images, index) {
        var divFrontCard = []
        for(var i = index; i < index+3; i++){
            divFrontCard.push(
                <Card style={{ width: '6rem', height: '9rem', border: '2px solid rgb(221, 221, 224)' }}>
                    <Card.Img src={images[i]} style={{ width: '100%', height: '100%' }} ></Card.Img>
                </Card>
            )
        }
        return divFrontCard
    }

    createBackCardDiv(){
        var divBackCard = []
        for(var i = 0; i < 3; i++){
            divBackCard.push(
                <Card style={{ width: '6rem', height: '9rem', border: '2px solid rgb(221, 221, 224)', marginLeft: "-5rem" }}>
                    <Card.Img src={CardBack} style={{ width: '100%', height: '100%' }} ></Card.Img>
                </Card>
            )
        }
        return divBackCard
    }

    handleReset() {
        this.distributeCards()
        this.setState({
            check: false,
            showResult: false,
            showCheck: true,
            showNewHand: false,
        });
        this.props.clearData()
    }

    handleExit() {
        this.setState({
            showLeave: true
        })
        this.props.clearData()
    }

    render() {
        const {images, winners} = this.props.cardTable
        const { player1, player2, player3, player4} = this.props.main
        return (
            <Router>
                { this.state.showLeave && (
                    <Route path="/" exact="true" component={MainPage}></Route>
                )}
                { !this.state.showLeave && (
                    <div style={{ display: "flex"}}>
                        <Container style={{ alignItems: "center", width: "250%", backgroundImage:`url(${wallImage})`, backgroundRepeat:"no-repeat", backgroundSize: "cover", height: "100%"}} fluid>
                            <div className="card-board" style={{ color: "white"}}>
                                <Row style={{ marginLeft: "100px", textAlign: "center", fontSize: "20px", color: "#DCDCDC", fontWeight: "bold"  }}>
                                    <Col>
                                        {!this.state.check &&( <p style={{marginLeft: "-20rem"}}>{player1 !== '' ? (player1): 'Seat 1' }</p> )}
                                        {this.state.check &&( <p>{player1}</p> )}
                                    </Col>
                                </Row>
                                <br />
                                <Row style={{ marginLeft: "100px", textAlign: "center"}}>
                                    <Col></Col>
                                    <Col style={{ textAlign: "center" }}>
                                        {!this.state.check && (
                                            <div className="cards">
                                                {this.createBackCardDiv()}
                                            </div>
                                        )}
                                        {this.state.check && (
                                            <div className="cards">
                                                {this.createFrontCardDiv(images,0)}
                                            </div>
                                        )}

                                    </Col>
                                    <Col></Col>
                                </Row>
                                <br />
                                <Row style={{ marginLeft: "100px", textAlign: "center", fontSize: "20px", color: "#DCDCDC", fontWeight: "bold" }}>
                                    <Col>
                                    {!this.state.check &&( <p style={{marginLeft: "-20rem"}}>{player2 !== '' ? (player2): 'Seat 2' }</p> )}
                                    {this.state.check &&( <p>{player2}</p> )}
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    {!this.state.check &&( <p style={{marginLeft: "-20rem"}}>{player3 !== '' ? (player3): 'Seat 3' }</p> )}
                                    {this.state.check &&( <p>{player3}</p> )}
                                    </Col>
                                </Row>
                                <br />
                                <Row style={{ marginLeft: "100px" , textAlign: "center" }}>
                                    <Col style={{ textAlign: "center" }}>
                                        {!this.state.check && (
                                            <div className="cards">
                                                {this.createBackCardDiv()}
                                            </div>
                                        )}
                                        {this.state.check && (
                                            <div className="cards">
                                                {this.createFrontCardDiv(images,3)}
                                            </div>
                                        )}
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        {!this.state.check && (
                                            <div className="cards">
                                                {this.createBackCardDiv()}
                                            </div>
                                        )}
                                        {this.state.check && (
                                            <div className="cards">
                                                {this.createFrontCardDiv(images,6)}
                                            </div>
                                        )}
                                    </Col>
                                </Row>
                                <br />
                                <Row style={{ marginLeft: "100px" , textAlign: "center" }}>
                                    <Col>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        {!this.state.check && (
                                            <div className="cards">
                                                {this.createBackCardDiv()}
                                            </div>
                                        )}
                                        {this.state.check && (
                                            <div className="cards">
                                                {this.createFrontCardDiv(images,9)}
                                            </div>
                                        )}
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                                <br/>
                                <Row style={{ marginLeft: "100px", textAlign: "center", fontSize: "20px", color: "#DCDCDC", fontWeight: "bold"  }}>
                                    <Col>
                                    {!this.state.check &&( <p style={{marginLeft: "-20rem"}}>{player4 !== '' ? (player4): 'Seat 4' }</p> )}
                                    {this.state.check &&( <p>{player4}</p> )}
                                    </Col>
                                </Row>
                            </div>
                        </Container >
                        <Container style={{ marginTop: "70px", textAlign: "center", fontFamily: "Times New Roman, Times, serif"}}>
                            {winners.length > 0 && (
                                <div>
                                    <Row>
                                        <Col style={{textAlign: "center"}}>
                                            <img src={winImage}></img>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col style={{textAlign: "center"}}>
                                            {this.getWinnerName()}
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col  style={{textAlign: "center"}}>
                                            {this.getWinnersHand()}
                                        </Col>
                                    </Row>
                                </div>
                            )}
                            <br/>
                            <br/>
                            <Row>
                                <Col>
                                    <button type="button" className="btn" onClick={() => this.handleCheck()} disabled={!this.state.showCheck}>Check</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ marginTop: "5px"}}>
                                    <button type="button" className="btn" onClick={() => this.handleResult()} disabled={!this.state.showResult}>Result</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ marginTop: "5px"}}>
                                    <button type="button" className="btn" onClick={() => this.handleReset()} disabled={!this.state.showNewHand}>New Hand</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ marginTop: "5px"}}>
                                    <Link to="/"><button type="button" className="btn" disabled={!this.state.showNewHand} onClick={() => this.handleExit()}>Exit</button></Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cardTable : state.cardTable,
        main : state.main
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getCards: () => dispatch(getCards()),
        getResult: (cardList) => dispatch(getResult(cardList)),
        addImages: (imageList) => dispatch(addImages(imageList)),
        clearData: () => dispatch(clearData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardTable)
