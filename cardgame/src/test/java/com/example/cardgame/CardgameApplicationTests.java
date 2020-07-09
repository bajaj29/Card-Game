package com.example.cardgame;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.cardgame.controller.CardController;
import com.example.cardgame.model.Cards;
import com.example.cardgame.model.Player;
import com.example.cardgame.service.CardService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CardgameApplicationTests {
    
	@Autowired
	private CardController cardController;
	
	@InjectMocks
    private CardController mockCardController;
    
    @Mock
    private CardService mockCardService;
	
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
	
	private List<String> namesList = new ArrayList<String>() {
		{
			add("Player1");
			add("Player2");
			add("Player3");
			add("Player4");
		}
	};
	
	private Cards cards = new Cards(cardList, namesList);

	private List<Player> winner = new ArrayList<Player>() {
		{
			add(new Player(1, "A",new ArrayList<Integer>() {
				{
					add(3);
					add(2);
					add(1);
				}
			}, 2));
		}
	};

	@Test
	public void test_PlayCardGame() throws Exception {

		when(mockCardService.getcards()).thenReturn(cardList);
		List<String> actualCardList = mockCardController.getCards();
		assertEquals(cardList.size(), actualCardList.size());
		for(int i = 0; i < cardList.size(); i++) {
			assertEquals(cardList.get(i), actualCardList.get(i));
		}
		
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
	}
}
