package com.harshith;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class Board {
    private int size;
    private int start;
    private int end;

    public Board(int size) {
        this.size = size;
        this.start = 1;
        this.end = size + start - 1;
    }
}
