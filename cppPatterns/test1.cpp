#include<iostream>

using namespace std;

int getDigitsSum(int num)
{
	int sum = 0, temp;

	while(num)
	{
		temp = num % 10;
		sum += temp;
		num /= 10;
	}

	return sum;
}

int getWeirdNumbers(int n, int k) 
{
	int index, res = 0;

	for(index=1;index<=n;index++)
	{
		if ((index % k != 0) && (getDigitsSum(index) % k == 0))
		{
			res++;
		}
	}

	return res;
}

int main()
{
	int n, k, res;

	cin>>n;
	cin>>k;

	res = getWeirdNumbers(n, k);

	cout<<res<<endl;
}