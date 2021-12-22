// C program to find minimum number of appends
// needed to make a string Palindrome
#include<iostream>
#include<stack>

using namespace std;

// Checking if the string is palindrome or not
bool isPalindrome(char *str)
{
	int len = strlen(str);

	// single character is always palindrome
	if (len == 1)
		return true;

	// pointing to first character
	char *ptr1 = str;

	// pointing to last character
	char *ptr2 = str+len-1;

	while (ptr2 > ptr1)
	{
		if (*ptr1 != *ptr2)
			return false;
		ptr1++;
		ptr2--;
	}

	return true;
}

// Recursive function to count number of appends
int noOfAppends(char s[], stack<char> &st)
{
	if (isPalindrome(s))
		return 0;

	// Removing first character of string by
	// incrementing base address pointer.
	st.push(s[0]);
	s++;

	return 1 + noOfAppends(s, st);
}

// Driver program to test above functions
int main()
{
	char s[] = "abede";
	stack<char> st;

	int res = noOfAppends(s, st);

	while(!st.empty())
	{
		cout<<st.top();
		st.pop();
	}

	return 0;
}
