import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { enterPlayer1, enterPlayer3, enterPlayer4, enterPlayer2 } from './MainPageAction'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './MainPage.css'
import { Link } from 'react-router-dom'
import CardTable from '../card-table/CardTable'
var wallImage = require('../cards-png/playing_card.jpg');

class MainPage extends Component {
    constructor(){
        super()
        this.state={
            showMain : true,
        }
        this.handleEnterValue = this.handleEnterValue.bind(this)
        this.handleStart = this.handleStart.bind(this)
    }

    handleStart(){
        this.setState({ showMain : false})
    }

    handleEnterValue = (event) =>{
        switch(event.target.name){
            case "player1":
                this.props.enterPlayer1(event.target.value)
                break
            case "player2":
                this.props.enterPlayer2(event.target.value)
                break
            case "player3":
                this.props.enterPlayer3(event.target.value)
                break
            case "player4":
                this.props.enterPlayer4(event.target.value)
                break
        }
    }

    render() {
        const { player1, player2, player3, player4} = this.props.main
        return (
            <Router>
                { !this.state.showMain && (
                    <Route exact="true" path="/table" component={CardTable}></Route>                
                )}
                { this.state.showMain && (
                <div style={{ backgroundImage:`url(${wallImage})`, backgroundRepeat:"no-repeat", backgroundSize: "100%", height: "740px"}}>
                <Container>
                    <Row>
                        <Col sm={5}>
                            <Container style={{ width: "fit-content", height: "fit-content", padding: "40px" , marginTop: "50px", fontSize: "20px", fontFamily: "Times New Roman, Times, serif", color: "#DCDCDC"}}>
                                <Row>
                                    <Col style={{textAlign: "left"}}>
                                        <h3>The Basics : Hand Ranking</h3>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col style={{height: "40px"}}>
                                    1. &nbsp;All Same : K, K, K &emsp;&emsp;&emsp;&nbsp;<img src={require('../cards-png/KC.png')} style={{height: "100%"}}/> <img src={require('../cards-png/KS.png')} style={{height: "100%"}}/> <img src={require('../cards-png/KD.png')} style={{height: "100%"}}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col style={{height: "40px"}}>
                                    2. &nbsp;Straight : 10, 9, 8 &emsp;&emsp;&emsp;&emsp;<img src={require('../cards-png/10D.png')} style={{height: "100%"}}/> <img src={require('../cards-png/9S.png')} style={{height: "100%"}}/> <img src={require('../cards-png/8H.png')} style={{height: "100%"}}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col style={{height: "40px"}}>
                                    3. &nbsp;Two of a Kind : 5, J, J &emsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={require('../cards-png/5H.png')} style={{height: "100%"}}/> <img src={require('../cards-png/JS.png')} style={{height: "100%"}}/> <img src={require('../cards-png/JH.png')} style={{height: "100%"}}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col style={{height: "40px"}}>
                                    4. &nbsp;Highest Card : A, J, 2 &emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={require('../cards-png/AD.png')} style={{height: "100%"}}/> <img src={require('../cards-png/JS.png')} style={{height: "100%"}}/> <img src={require('../cards-png/2H.png')} style={{height: "100%"}}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                    Note : Suits of a card doesn't matter
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col sm={7}>
                            <Container style={{ width: "100%", height: "100%", padding: "40px", marginTop: "50px", fontSize: "20px", fontFamily: "Times New Roman, Times, serif", color: "#DCDCDC"}} fluid>
                                <Row style={{ textAlign: "center"}}>
                                    <Col md={{ span: 10, offset: 1 }}>
                                        <h3>Player's Entry</h3>
                                    </Col>
                                </Row>
                                <br/>
                                <Row style={{ textAlign: "center"}}>
                                    <Col md={{ span: 10, offset: 3 }}>
                                        <div style={{ borderRadius:"25px", width:"fit-content", padding: "5px", border: "1px solid #DCDCDC", display: "flex"}}><input type="text" name="player1" value={player1} onChange={this.handleEnterValue} style={{border: "none", width: "200px", paddingLeft: "15px", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", background: "transparent", color: "#DCDCDC"}}/><div style={{ width: "90px", height: "inherit", backgroundColor: "#008CBA", border: "none", borderTopRightRadius: "15px", borderBottomRightRadius: "15px", fontFamily: "Times New Roman, Times, serif"}}>Player 1</div></div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row style={{ textAlign: "center" }}>
                                    <Col md={{ span: 10, offset: 3 }}>
                                        <div style={{ borderRadius:"25px", width:"fit-content", padding: "5px", border: "1px solid #DCDCDC", display: "flex"}}><input type="text" name="player2" value={player2} onChange={this.handleEnterValue} style={{border: "none", width: "200px", paddingLeft: "15px", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", background: "transparent", color: "#DCDCDC"}}/><div style={{ width: "90px", height: "inherit", backgroundColor: "#008CBA", border: "none", borderTopRightRadius: "15px", borderBottomRightRadius: "15px", fontFamily: "Times New Roman, Times, serif"}}>Player 2</div></div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row style={{ textAlign: "center" }}>
                                    <Col md={{ span: 10, offset: 3 }}>
                                        <div style={{ borderRadius:"25px", width:"fit-content", padding: "5px", border: "1px solid #DCDCDC", display: "flex"}}><input type="text" name="player3" value={player3} onChange={this.handleEnterValue} style={{border: "none", width: "200px", paddingLeft: "15px", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", background: "transparent", color: "#DCDCDC"}}/><div style={{ width: "90px", height: "inherit", backgroundColor: "#008CBA", border: "none", borderTopRightRadius: "15px", borderBottomRightRadius: "15px", fontFamily: "Times New Roman, Times, serif"}}>Player 3</div></div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row style={{ textAlign: "center" }}>
                                    <Col md={{ span: 10, offset: 3 }}>
                                        <div style={{ borderRadius:"25px", width:"fit-content", padding: "5px", border: "1px solid #DCDCDC", display: "flex"}}><input type="text" name="player4" value={player4} onChange={this.handleEnterValue} style={{border: "none", width: "200px", paddingLeft: "15px", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", background: "transparent", color: "#DCDCDC"}}/><div style={{ width: "90px", height: "inherit", backgroundColor: "#008CBA", border: "none", borderTopRightRadius: "15px", borderBottomRightRadius: "15px", fontFamily: "Times New Roman, Times, serif"}}>Player 4</div></div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row style={{ textAlign: "center" }}>
                                    <Col md={{ span: 10, offset: 1 }}>
                                       <Link to="/table"><button style={{ width:"25%", height: "inherit", background: "none", border: "1px solid #DCDCDC", borderRadius: "25px", color: "#DCDCDC"}} onClick={this.handleStart}>Start</button></Link> 
                                    </Col>
                                </Row>
                            </Container>
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
        main : state.main
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        enterPlayer1: (name) => dispatch(enterPlayer1(name)),
        enterPlayer2: (name) => dispatch(enterPlayer2(name)),
        enterPlayer3: (name) => dispatch(enterPlayer3(name)),
        enterPlayer4: (name) => dispatch(enterPlayer4(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
