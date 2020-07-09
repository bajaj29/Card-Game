package com.example.cardgame.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cardgame.model.CardException;
import com.example.cardgame.model.Cards;
import com.example.cardgame.model.Player;
import com.example.cardgame.service.CardService;

@RestController
@CrossOrigin
@RequestMapping("api/cardgame/")
public class CardController {
	
	@Autowired(required=true)
	private CardService cardService;
	
	@GetMapping("cards")
	public List<String> getCards() throws Exception{
		try {
			List<String> cards = cardService.getcards();
			if(cards.size()>0) {
				return cards;
			}
			else {
				throw new CardException("Cards Not Found");
			}
		}
		catch (Exception ex) {
			throw ex;
		}
		
	}
	
	@PostMapping("result")
	@ResponseBody
	public List<Player> getResult(@RequestBody Cards cards) throws Exception{
		try {
			List<Player> winnerList = cardService.getResult(cards);
			if(winnerList != null) {
				return winnerList;
			}
			else {
				throw new CardException("Result Not Found");
			}
		}
		catch(Exception ex) {
			throw ex;
		}
	}
}
