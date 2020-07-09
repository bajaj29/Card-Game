package com.example.cardgame.model;

import java.util.List;

public class Player {
	
	private int id;
	private String name;
	private List<Integer> hand;
	private int handRank;
	
	
	public Player() {
		super();
	}

	public Player(int id, String name, List<Integer> hand, int handRank) {
		super();
		this.id = id;
		this.name = name;
		this.hand = hand;
		this.handRank = handRank;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Integer> getHand() {
		return hand;
	}

	public void setHand(List<Integer> hand) {
		this.hand = hand;
	}

	public int getHandRank() {
		return handRank;
	}

	public void setHandRank(int handRank) {
		this.handRank = handRank;
	}
	
}
