#include <iostream>
using namespace std;

int x = 100;
void fr(int &z)
{
   z = z + 5;      // adds 5 to x
}
void ft(int &y)
{
   y = y + 1;      // adds 1 to x
   fr(y);          // reference parameter now is argument
}
int main()
{
   ft(x);
   cout << "x = " << x << endl;
}
