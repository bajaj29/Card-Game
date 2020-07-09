package com.example.cardgame.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.cardgame.model.Cards;
import com.example.cardgame.model.Player;

@Service
public class CardService {

	private static HashMap<String, Integer> cardMap = new HashMap<String, Integer>() {
		{
			put("A", 14);
			put("K", 13);
			put("Q", 12);
			put("J", 11);
			put("10", 10);
			put("9", 9);
			put("8", 8);
			put("7", 7);
			put("6", 6);
			put("5", 5);
			put("4", 4);
			put("3", 3);
			put("2", 2);
			put("1", 1);
		}
	};

	private static String[] cards = new String[] { "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H",
			"4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S", "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C",
			"9D", "9H", "9S", "10C", "10D", "10H", "10S", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS", "KC", "KD",
			"KH", "KS", "AC", "AD", "AH", "AS" };

	public List<String> getcards() {
		List<String> finalCards = new ArrayList<String>(12);

		List<String> cardList = new ArrayList<>(cards.length);
		for (int i = 0; i < cards.length; i++) {
			cardList.add(cards[i]);
		}

		for (int i = 0; i < 13; i++) {
			Random rand = new Random();
			int index = rand.nextInt(cardList.size());
			String card = cardList.get(index);
			finalCards.add(card);
			cardList.remove(index);
		}
		return finalCards;
	}

	public HashMap<Integer, List<Integer>> getPlayersHand(List<String> cards) {

		HashMap<Integer, List<Integer>> playersHand = new HashMap<Integer, List<Integer>>() {
			{
				put(1, new ArrayList<Integer>());
				put(2, new ArrayList<Integer>());
				put(3, new ArrayList<Integer>());
				put(4, new ArrayList<Integer>());
			}
		};

		Set set = playersHand.entrySet();
		Iterator iterator = set.iterator();
		int k = 0;
		while (iterator.hasNext()) {
			Map.Entry player = (Map.Entry) iterator.next();
			List<Integer> hand = (List<Integer>) player.getValue();
			for (int i = k; i < k + 3; i++) {
				if (cards.get(i).contains("10")) {
					hand.add(cardMap.get(cards.get(i).substring(0, 2)));
				} else {
					hand.add(cardMap.get(Character.toString(cards.get(i).charAt(0))));
				}
			}
			Collections.sort(hand, Collections.reverseOrder());
			
			// Suffling and changing priority of 'Ace' card if in sequence like (A,2,3)
			if(hand.get(0) == 14 && hand.get(1) == 3 && hand.get(2) == 2) {
				hand.remove(0);
				hand.add(1);
			}
			k += 3;
		}
		return playersHand;
	}
	
	public List<Player> giveHandRanking(HashMap<Integer, List<Integer>> playersHandList, List<String> namesList){
		
		List<Player> playersList = new ArrayList<Player>();
		Set set = playersHandList.entrySet();
		Iterator iterator = set.iterator();
		int index = 0;
		while (iterator.hasNext()) {
			
			Map.Entry player = (Map.Entry) iterator.next();
			List<Integer> hand = (List<Integer>) player.getValue();
			
			if((hand.get(0) == hand.get(1)) && (hand.get(1) == hand.get(2))) {
				playersList.add(new Player((int)player.getKey(), namesList.get(index), hand, 1));
			}
			else if((hand.get(0)-1 == hand.get(1)) && (hand.get(1)-1 == hand.get(2))) {
				playersList.add(new Player((int)player.getKey(), namesList.get(index), hand, 2));
			}
			else if((hand.get(0) != hand.get(1)) && (hand.get(1) == hand.get(2))) {
				playersList.add(new Player((int)player.getKey(), namesList.get(index), hand, 3));
			}
			else if((hand.get(0) == hand.get(1)) && (hand.get(1) != hand.get(2))) {
				int cardNumber = hand.get(0);
				hand.remove(0);
				hand.add(cardNumber);
				playersList.add(new Player((int)player.getKey(), namesList.get(index), hand, 3));
			}
			else {
				playersList.add(new Player((int)player.getKey(), namesList.get(index), hand, 4));
			}
			index++;
		}
		return playersList;
	}

	public List<Player> getResult(Cards cards) {
		
		List<Player> winnersList = new ArrayList<Player>();
		HashMap<Integer, List<Integer>> playersHand = getPlayersHand(cards.getCards());
		List<Player> playersList = giveHandRanking(playersHand, cards.getNames());
		List<Integer> actualRank = new ArrayList<Integer>();
		
		for(int i = 0; i < playersList.size(); i++) {
			actualRank.add(playersList.get(i).getHandRank());
		}
		
		Collections.sort(actualRank);
		int maxF = 0;
		int maxM = 0;
		int maxL = 0;
		
		for(int i = 0; i < playersList.size(); i++) {
			if((actualRank.get(0) == 1) && (actualRank.get(0) == playersList.get(i).getHandRank())) {
				if(maxF <= playersList.get(i).getHand().get(0)) {
					maxF = playersList.get(i).getHand().get(0);
					winnersList.clear();
					winnersList.add(playersList.get(i));
				}
			}
			else if((actualRank.get(0) == 2) && (actualRank.get(0) == playersList.get(i).getHandRank())) {
				if(maxF < playersList.get(i).getHand().get(0)) {
					maxF = playersList.get(i).getHand().get(0);
					winnersList.clear();
					winnersList.add(playersList.get(i));
				}
				else if(maxF == playersList.get(i).getHand().get(0)) {
					maxF = playersList.get(i).getHand().get(0);
					winnersList.add(playersList.get(i));
				}
			}
			else if((actualRank.get(0) == 3) && (actualRank.get(0) == playersList.get(i).getHandRank())) {
				if(maxF < playersList.get(i).getHand().get(0)) {
					maxF = playersList.get(i).getHand().get(0);
					maxL = playersList.get(i).getHand().get(2);
					winnersList.clear();
					winnersList.add(playersList.get(i));
				}
				else if(maxF == playersList.get(i).getHand().get(0) && maxL < playersList.get(i).getHand().get(2)) {
					maxF = playersList.get(i).getHand().get(0);
					maxL = playersList.get(i).getHand().get(2);
					winnersList.clear();
					winnersList.add(playersList.get(i));
				}
				else if(maxF == playersList.get(i).getHand().get(0) && maxL == playersList.get(i).getHand().get(2)) {
					maxF = playersList.get(i).getHand().get(0);
					maxL = playersList.get(i).getHand().get(2);
					winnersList.add(playersList.get(i));
				}
			}
			else if((actualRank.get(0) == 4) && (actualRank.get(0) == playersList.get(i).getHandRank())){
				if(maxF < playersList.get(i).getHand().get(0)) {
					maxF = playersList.get(i).getHand().get(0);
					maxM = playersList.get(i).getHand().get(1);
					maxL = playersList.get(i).getHand().get(2);
					winnersList.clear();
					winnersList.add(playersList.get(i));
				}
				else if(maxF == playersList.get(i).getHand().get(0) && maxM < playersList.get(i).getHand().get(1)) {
					maxF = playersList.get(i).getHand().get(0);
					maxM = playersList.get(i).getHand().get(1);
					maxL = playersList.get(i).getHand().get(2);
					winnersList.clear();
					winnersList.add(playersList.get(i));
				}
				else if(maxF == playersList.get(i).getHand().get(0) && maxM == playersList.get(i).getHand().get(1) && maxL < playersList.get(i).getHand().get(2)) {
					maxF = playersList.get(i).getHand().get(0);
					maxM = playersList.get(i).getHand().get(1);
					maxL = playersList.get(i).getHand().get(2);
					winnersList.clear();
					winnersList.add(playersList.get(i));
				}
				else if(maxF == playersList.get(i).getHand().get(0) && maxM == playersList.get(i).getHand().get(1) && maxL == playersList.get(i).getHand().get(2)) {
					maxF = playersList.get(i).getHand().get(0);
					maxM = playersList.get(i).getHand().get(1);
					maxL = playersList.get(i).getHand().get(2);
					winnersList.add(playersList.get(i));
				}
			}
		}
		
		return winnersList;
	}
}
