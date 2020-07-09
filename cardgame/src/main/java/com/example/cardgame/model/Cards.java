package com.example.cardgame.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Cards {
	
	@JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
	private List<String> cards;
	private List<String> names;
	
	public Cards() {
		super();
	}

	public List<String> getNames() {
		return names;
	}

	public void setNames(List<String> names) {
		this.names = names;
	}

	public Cards(List<String> cards, List<String> names) {
		super();
		this.cards = cards;
		this.names = names;
	}

	public List<String> getCards() {
		return cards;
	}

	public void setCards(List<String> cards) {
		this.cards = cards;
	}
}
