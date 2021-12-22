package com.harshith;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class Dice {
    private int minValue;
    private int maxValue;
    private int currentValue;

    public int roll() {
        int val = (int)(minValue + Math.random() * maxValue);

        return val;
    }
}
