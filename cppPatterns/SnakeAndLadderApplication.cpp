#include<iostream>
#include<string>
#include<queue>
#include<vector>

using namespace std;

class Player
{
	private:
		string _name;
		int _position;
		bool _won;

	public:
		Player(string name)
		{
			strcpy(_name, name);
		}

	string getName()
	{
		return _name;
	}

	int getPosition()
	{
		return _position;
	}
};

class Board
{
	private:
		int _size;
		int _start;
		int _end;

	public:
		Board(int size)
		{
			_size = size;
			_start = 1;
			_end = size - 1;
		}
};

class Dice
{
	private:
		int _minValue;
		int _maxValue;
		int _currentValue;

	public:
		Dice(int minValue, int maxValue, int currentValue)
		{
			_minValue = minValue;
			_maxValue = maxValue;
			_currentValue = currentValue;
		}

		int roll()
		{
			return rand();
		}
};

class Ladder
{
	private:
		int _start;
		int _end;
};

class Snake
{
	private:
		int _start;
		int _end;
};

class Game
{
	private:
		int _numberOfSnakes;
		int _numberofLadders;
		
		queue<Player> _players;
		vector<Snake> _snakes;
		vector<Ladder> _ladders;

		Board board;
		Dice dice;

	public:
		Game(int numberofLadders, int numberOfSnakes, int boardSize)
		{
			_numberofLadders = numberofLadders;
			_numberOfSnakes = numberOfSnakes;
			board = new Board(boardSize);
			dice = new Dice(1, 6, 2);
			initBoard();
		}

		void initBoard()
		{
			
		}

};
















