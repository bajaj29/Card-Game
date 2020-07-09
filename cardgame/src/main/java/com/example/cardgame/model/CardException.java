package com.example.cardgame.model;

@SuppressWarnings("serial")
public class CardException extends Exception {

	String str;

	public CardException(String error) {
		str = error;
	}

	public String toString() {
		return (str);
	}
}
