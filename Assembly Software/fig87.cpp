#include <iostream>
using namespace std;

int x = 5, y = 6;
void fr(int &z)      // z is a reference parameter
{
   z = z + 5;
}
int main()
{
   fr(x);           // x is the argument
   fr(y);           // y is the argument
}
